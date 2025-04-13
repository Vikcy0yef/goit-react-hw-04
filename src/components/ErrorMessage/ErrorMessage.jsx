import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
      {message || "Something went wrong. Please try again."}
    </div>
  )
}

export default ErrorMessage
