import React, { useState } from "react";
import Navbar from "../Layouts/Navbar/Navbar.js";
import { Grid, Paper, Button, Typography } from "@mui/material";
import "./DesignSelection.css";

function DesignSelection() {
  const [userDesign, setUserDesign] = useState(null);

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
              <img src={userDesign || "logo192.png"} alt="User Design" />
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
                  component="span" // This makes the button act like a file input button
                >
                  Change Design
                </Button>
              </label>
            </div>
            <div className="design-cell categories">
              <div className="category">
                <Button variant="contained">Shirts</Button>
                <div className="category-images">
                  <img src="t_shirt.png" alt="Shirt 1" />
                  <Button variant="outlined" className="edit-button">
                    Edit
                  </Button>
                  <img src="t_shirt.png" alt="Shirt 2" />
                  <Button variant="outlined" className="edit-button">
                    Edit
                  </Button>
                </div>
              </div>
              <div className="category">
                <Button variant="contained">Hoodie</Button>
                <div className="category-images">
                  <img src="t_hoodie.png" alt="Hoodie 1" />
                  <Button variant="outlined" className="edit-button">
                    Edit
                  </Button>
                  <img src="t_hoodie.png" alt="Hoodie 2" />
                  <Button variant="outlined" className="edit-button">
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignSelection;
