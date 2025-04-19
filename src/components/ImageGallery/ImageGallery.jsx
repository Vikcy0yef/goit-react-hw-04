import React from 'react'
import s from "./ImageGallery.module.css"
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({images, onImageClick}) => {
  if (!Array.isArray(images)) {
    return <div>No images available.</div>;
  }

  return (
    <ul className={s.list}>
      {images.map((img) => (
        <li key={img.id}>
        <ImageCard image={img}  onClick={() => onImageClick(img)} />
        </li>
      ))}
    </ul>
  );
}

export default ImageGallery
