import React from 'react'

const ImageCard = ({image}) => {
  return (
    <div>
      <img src={image.scr} alt={image.alt} />
    </div>
  )
}

export default ImageCard
