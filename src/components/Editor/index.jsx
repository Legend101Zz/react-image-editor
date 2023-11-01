import React from "react";
import ImageEditor from "./index2";

function ImageEditorPage({ mainImageSrc, overlayImageSrc }) {
  return (
    <div>
      <ImageEditor
        mainImageSrc={mainImageSrc}
        overlayImageSrc={overlayImageSrc}
      />
    </div>
  );
}

export default ImageEditorPage;
