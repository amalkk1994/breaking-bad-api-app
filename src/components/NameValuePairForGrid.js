import React from "react"

const NameValuePairForGrid = ({ fieldName, fieldValue }) => {
  return (
    <>
      <p className="font-black text-slate-800 justify-self-start">
        {fieldName}
      </p>
      <p className="font-medium text-slate-800 justify-self-start">
        {fieldValue}
      </p>
    </>
  )
}

export default NameValuePairForGrid
