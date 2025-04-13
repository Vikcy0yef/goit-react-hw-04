import React from 'react'

const LoadMoreBtn = ({onClick}) => {
  return (
     <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={onClick}>Load more</button>
    </div>
  )
}

export default LoadMoreBtn
