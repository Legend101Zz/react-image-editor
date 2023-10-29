import React, { useState, useRef, useEffect, useCallback } from "react";

function ImageEditor({ mainImageSrc, overlayImageSrc }) {
  const canvasRef = useRef(null);
  const [overlayPosition, setOverlayPosition] = useState({ x: 100, y: 100 });
  const [overlayScale, setOverlayScale] = useState(1);
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
      offsetX <= overlayPosition.x + overlayImageSrc.width * overlayScale &&
      offsetY >= overlayPosition.y &&
      offsetY <= overlayPosition.y + overlayImageSrc.height * overlayScale
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
      drawImages(
        mainImageSrc,
        overlayImageSrc,
        overlayPosition,
        overlayScale,
        rotationAngle
      );
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
      drawImages(
        mainImageSrc,
        overlayImageSrc,
        overlayPosition,
        overlayScale,
        rotationAngle
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  const handleRotateLeft = () => {
    // Rotate the overlay image left (counter-clockwise)
    setRotationAngle(rotationAngle - 90);
    drawImages(
      mainImageSrc,
      overlayImageSrc,
      overlayPosition,
      overlayScale,
      rotationAngle
    );
  };

  const handleRotateRight = () => {
    // Rotate the overlay image right (clockwise)
    setRotationAngle(rotationAngle + 90);
    drawImages(
      mainImageSrc,
      overlayImageSrc,
      overlayPosition,
      overlayScale,
      rotationAngle
    );
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{
          cursor: isDragging ? "grabbing" : isResizing ? "se-resize" : "grab",
        }}
      />
      <button onClick={handleRotateLeft}>Rotate Left</button>
      <button onClick={handleRotateRight}>Rotate Right</button>
    </div>
  );
}

export default ImageEditor;
