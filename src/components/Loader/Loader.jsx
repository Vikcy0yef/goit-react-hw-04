import React from 'react'
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <ClipLoader size={40} color="#36d7b7" />
    </div>
  )
}

export default Loader
