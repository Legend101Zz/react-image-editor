import React, { useState } from "react";

function Editor() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [displayedImage, setDisplayedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setOutputImage(null);
    setDisplayedImage(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    if (selectedFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;

        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          canvas.width = img.width;
          canvas.height = img.height;

          ctx.drawImage(img, 0, 0, img.width, img.height);

          // Simple background removal: replace white and light gray with transparency
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const pixels = imageData.data;

          for (let i = 0; i < pixels.length; i += 4) {
            // Replace white and light gray backgrounds with transparency
            if (
              (pixels[i] >= 220 &&
                pixels[i + 1] >= 220 &&
                pixels[i + 2] >= 220) ||
              (pixels[i] >= 200 && pixels[i + 1] >= 200 && pixels[i + 2] >= 200)
            ) {
              pixels[i + 3] = 0; // Set alpha channel to 0 (transparent)
            }
          }

          ctx.putImageData(imageData, 0, 0);

          // Convert the canvas to a data URL
          const outputDataURL = canvas.toDataURL("image/png");

          setOutputImage(outputDataURL);
        };
      };

      reader.readAsDataURL(selectedFile);

      setDisplayedImage(outputImage);
    }
  };

  const handleSubmit = () => {
    if (displayedImage) {
      console.log("SENT-REQ");
      // Send the displayed image (which can be the selected image or the background-removed image) to the server.

      // Create a FormData object to send the image file
      const formData = new FormData();
      formData.append("image", displayedImage);

      // Make a POST request to the server endpoint to save the image
      fetch("server_api_endpoint_here", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            console.log("Image saved successfully.");
          } else {
            console.error("Error saving image.");
          }
        })
        .catch((error) => {
          console.error("Error saving image:", error);
        });
    }
  };

  return (
    <div className="editor-container">
      <h1>
        Please remove the background from your design. Try removing the
        background remover here, if the desired output is not given, try here{" "}
        <a
          href="https://www.remove.bg/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Remove.bg
        </a>
        .
      </h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {displayedImage && ( // Display the visible image
        <div className="image-preview-container">
          <p>Image:</p>
          <div
            style={{
              width: "300px",
              height: "300px",
              overflow: "hidden",
            }}
          >
            <img
              src={displayedImage}
              alt="Preview"
              className="image-preview"
              style={{ width: "100%", height: "100%" }} // Set fixed width and height
            />
          </div>
        </div>
      )}
      <button className="upload-button" onClick={handleUpload}>
        Remove Background
      </button>

      {outputImage && (
        <div className="output-container">
          <img
            src={outputImage}
            alt="Background Removed"
            className="output-image"
          />
        </div>
      )}

      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Editor;
