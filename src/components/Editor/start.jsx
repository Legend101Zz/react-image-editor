import React, { useState } from "react";
import Navbar from "../Layouts/Navbar/Navbar.js";
import ImageOverlay from "./image.jsx";
import { Button } from "@mui/material";
import Editor from "./index.jsx"; // Import the Editor component
import "./DesignSelection.css";

function DesignSelection() {
  const [userDesign, setUserDesign] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleDesignChange = (e) => {
    // Handle the user's design upload and set it to the state
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserDesign(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to set the selected image when the "Edit" button is clicked
  const handleEditImage = (imageData) => {
    setSelectedImage(imageData);
  };

  return (
    <>
      <Navbar />
      <div className="design-selection">
        <div className="design-table">
          <div className="design-table-row design-header">
            <div className="design-cell">Design</div>
            <div className="design-cell">Categories</div>
          </div>
          <div className="design-table-row">
            <div className="design-cell design-preview">
              <img src={userDesign || "logo_e.png"} alt="User Design" />
              <label>
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleDesignChange}
                />
                <Button
                  variant="contained"
                  style={{
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    marginLeft: "5%",
                    marginTop: "20%",
                    backgroundColor: "#CBB428",
                    borderRadius: "20px 0 0 20px",
                  }}
                  component="span"
                >
                  Change Design
                </Button>
              </label>
            </div>
            <div className="design-cell categories">
              <div className="category">
                <Button variant="contained">Shirts</Button>
                <div className="category-images">
                  <ImageOverlay
                    mainImage="t_shirt2.png"
                    overlayImage={userDesign || "logo_e.png"}
                    overlayPosition="10,20"
                    width={200}
                    height={200}
                  />
                  <Button
                    variant="outlined"
                    className="edit-button"
                    onClick={() => handleEditImage(selectedImage || userDesign)}
                  >
                    Edit
                  </Button>
                  <ImageOverlay
                    mainImage="t_shirt2.png"
                    overlayImage={userDesign || "logo_e.png"}
                    overlayPosition="10,20"
                    width={200}
                    height={200}
                  />
                  <Button
                    variant="outlined"
                    className="edit-button"
                    onClick={() => handleEditImage(selectedImage || userDesign)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <div className="category">
                <Button variant="contained">Hoodie</Button>
                <div className="category-images">
                  <ImageOverlay
                    mainImage="t_hoodie.png"
                    overlayImage={userDesign || "logo_e.png"}
                    overlayPosition="10,20"
                    width={300}
                    height={400}
                  />
                  <Button
                    variant="outlined"
                    className="edit-button"
                    onClick={() => handleEditImage(selectedImage || userDesign)}
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Editor image={selectedImage} />{" "}
      {/* Pass the selected image to the Editor */}
    </>
  );
}

export default DesignSelection;
