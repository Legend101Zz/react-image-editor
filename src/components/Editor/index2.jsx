import React, { useState, useRef, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRedo,
  faExpand,
  faSearchMinus,
  faSearchPlus,
} from "@fortawesome/free-solid-svg-icons";

function ImageEditor({ mainImageSrc, overlayImageSrc }) {
  const canvasRef = useRef(null);
  const [overlayPosition, setOverlayPosition] = useState({ x: 80, y: 50 });
  const [overlayScale, setOverlayScale] = useState(0.5);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState(null);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 });
  const [mainImage, setMainImage] = useState(new Image());
  const [overlayImage, setOverlayImage] = useState(new Image());

  const drawImages = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the main image
    ctx.drawImage(mainImage, 0, 0, canvas.width, canvas.height);

    const { x, y } = overlayPosition;
    const width = overlayImage.width * overlayScale;
    const height = overlayImage.height * overlayScale;

    ctx.save();
    ctx.translate(x + width / 2, y + height / 2);
    ctx.rotate((rotationAngle * Math.PI) / 180);
    ctx.drawImage(overlayImage, -width / 2, -height / 2, width, height);
    ctx.restore();

    // Draw bounding box
    //ctx.strokeStyle = "dotted";
    ctx.setLineDash([2, 3]);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "red";
    const boundingBoxWidth = overlayImage.width * overlayScale;
    const boundingBoxHeight = overlayImage.height * overlayScale;
    ctx.strokeRect(x, y, boundingBoxWidth, boundingBoxHeight);
  }, [mainImage, overlayImage, overlayPosition, overlayScale, rotationAngle]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    mainImage.src = mainImageSrc;
    mainImage.onload = () => {
      canvas.width = mainImage.width;
      canvas.height = mainImage.height;

      overlayImage.src = overlayImageSrc;
      overlayImage.onload = () => {
        drawImages();
      };
    };
  }, [
    mainImageSrc,
    overlayImageSrc,
    overlayPosition,
    overlayScale,
    rotationAngle,
    drawImages,
    mainImage,
    overlayImage,
  ]);

  const handleMouseDown = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    if (
      offsetX >= overlayPosition.x &&
      offsetX <= overlayPosition.x + overlayImage.width * overlayScale &&
      offsetY >= overlayPosition.y &&
      offsetY <= overlayPosition.y + overlayImage.height * overlayScale
    ) {
      // Clicked inside the overlayed image, enable dragging
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    } else {
      // Clicked outside the overlayed image, enable resizing
      setIsResizing(true);
      setResizeStart({ x: e.clientX, y: e.clientY });
      // Determine the resize handle (e.g., top-left, top-right, bottom-left, bottom-right)
      // You can add logic to set the `resizeHandle` state based on the click position
      setResizeHandle("bottom-right");
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;

      setOverlayPosition({
        x: overlayPosition.x + dx,
        y: overlayPosition.y + dy,
      });

      setDragStart({ x: e.clientX, y: e.clientY });
      drawImages();
    } else if (isResizing) {
      const dx = e.clientX - resizeStart.x;
      const dy = e.clientY - resizeStart.y;

      // Implement resizing logic based on the `resizeHandle`
      if (resizeHandle === "bottom-right") {
        const newScale = overlayScale + (dx + dy) * 0.01;
        if (newScale > 0.1) {
          setOverlayScale(newScale);
        }
      }

      setResizeStart({ x: e.clientX, y: e.clientY });
      drawImages();
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleScale = (scaleFactor) => {
    const newScale = overlayScale + scaleFactor;
    if (newScale > 0.1) {
      setOverlayScale(newScale);
      drawImages();
    }
  };

  const handleRotateLeft = () => {
    // Rotate the overlay image left (counter-clockwise)
    setRotationAngle(rotationAngle - 90);
    drawImages();
  };

  const handleRotateRight = () => {
    // Rotate the overlay image right (clockwise)
    setRotationAngle(rotationAngle + 90);
    drawImages();
  };

  const scaleButtonSize = 30; // Set the size of scale buttons

  const renderScaleButtons = () => {
    const { x, y } = overlayPosition;
    const width = overlayImage.width * overlayScale;
    const height = overlayImage.height * overlayScale;

    // Calculate button positions at the edges of the bounding box
    const buttons = [
      { x: x - scaleButtonSize, y: y - scaleButtonSize },
      { x: x + width, y: y - scaleButtonSize },
      { x: x - scaleButtonSize, y: y + height },
      { x: x + width, y: y + height },
    ];

    return buttons.map((button, index) => (
      <button
        key={index}
        onClick={() => handleScale(0.1 * (index < 2 ? 1 : -1), index < 2)}
        style={{
          position: "absolute",
          top: button.y,
          left: button.x,
          width: scaleButtonSize,
          height: scaleButtonSize,
        }}
      >
        <FontAwesomeIcon
          icon={index < 2 ? faSearchPlus : faSearchMinus}
          style={{ fontSize: "24px" }}
        />
      </button>
    ));
  };

  return (
    <div style={{ position: "relative" }}>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          cursor: isDragging ? "grabbing" : isResizing ? "se-resize" : "grab",
        }}
      />
      {/* Rotate Left Icon */}
      <button onClick={handleRotateLeft}>
        <FontAwesomeIcon icon={faRedo} />
      </button>
      {/* Rotate Right Icon */}
      <button onClick={handleRotateRight}>
        <FontAwesomeIcon icon={faRedo} flip="horizontal" />
      </button>
      {renderScaleButtons()}
    </div>
  );
}

export default ImageEditor;
