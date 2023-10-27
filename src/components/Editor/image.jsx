import React, { useEffect, useRef } from "react";

function ImageOverlay({
  mainImage,
  overlayImage,
  overlayPosition,
  width,
  height,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (mainImage && overlayImage && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const imageObj = new Image();
      imageObj.src = mainImage;

      const overlayObj = new Image();
      overlayObj.src = overlayImage;

      imageObj.onload = () => {
        // Draw the main image on the canvas
        canvas.width = width || imageObj.width;
        canvas.height = height || imageObj.height;
        context.drawImage(imageObj, 0, 0, canvas.width, canvas.height);

        overlayObj.onload = () => {
          const [x, y] = overlayPosition.split(",").map(Number);
          // Draw the overlay image on top of the main image at the specified position
          context.drawImage(
            overlayObj,
            x,
            y,
            overlayObj.width,
            overlayObj.height
          );
        };
      };
    }
  }, [mainImage, overlayImage, overlayPosition, width, height]);

  return <canvas ref={canvasRef} />;
}

export default ImageOverlay;
