import React from 'react'
import s from "./ImageGallery.module.css"

const ImageGallery = ({images, onImageClick}) => {
  if (!Array.isArray(images)) {
    return <div>No images available.</div>;
  }

  return (
    <ul className={s.list}>
      {images.map((img) => (
        <li key={img.id} onClick={() => onImageClick(img)}>
          <div>
            <img src={img.src} alt={img.alt} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery
