import React from 'react'

const ImageCard = ({image, onClick}) => {
  return (
   <div onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={image.src} alt={image.alt} />
    </div>
  )
}

export default ImageCard
