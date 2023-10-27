import React from "react";
import Navbar from "../Layouts/Navbar/Navbar.js";
import "./DesignSelection.css";

function DesignSelection() {
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
              {/* Display the user-added design here */}
              <img src="logo192.png" alt="User Design" />
            </div>
            <div className="design-cell categories">
              <div className="category">
                <h1>Shirts</h1>
                <div className="category-images">
                  <img src="t_shirt.png" alt="Shirt 1" />
                  <img src="t_shirt.png" alt="Shirt 2" />
                </div>
              </div>
              <div className="category">
                <h1>Hoodies</h1>
                <div className="category-images">
                  <img src="t_shirt.png" alt="Hoodie 1" />
                  <img src="t_shirt.png" alt="Hoodie 2" />
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
