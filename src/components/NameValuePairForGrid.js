import React from "react"

const NameValuePairForGrid = ({ fieldName, fieldValue }) => {
  return (
    <>
      <p className="text-xs font-black text-slate-800 justify-self-start">
        {fieldName}
      </p>
      <p className="text-xs font-medium text-slate-800 justify-self-start">
        {fieldValue}
      </p>
    </>
  )
}

export default NameValuePairForGrid
