import React, { useState, useEffect } from "react";
import "./ImageBox.css";

const ImageBox = ({ filename, sourceName, page }) => {
  // const [filePath, setFilePath] = useState("");
  // useEffect(() => {
  //   async function fetchImage() {
  //     const resp = await fetch(`http://localhost:5000/uploads/${filename}`)
  //     const imageData = resp.json();
  //     console.log(imageData);
  //     // setFilePath()
  //   }
  //   fetchImage();
  // }, [filename])
  return (
    <div className="data-box">
      <div className="data-box__image-container">
        <img
          className="data-box-img"
          src={`http://localhost:5000/uploads/${filename}`}
          alt=""
        />
      </div>
      <div className="data-box__content">
        <p className="source-name">{sourceName}</p>
        <span className="page-ref">Página {page}</span>
      </div>
    </div>
  );
};

export default ImageBox;
