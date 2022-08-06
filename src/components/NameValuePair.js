const NameValuePair = ({ fieldName, fieldValue }) => {
  return (
    <div className="flex flex-row space-x-10 mt-3">
      <p className="font-black text-slate-800">{fieldName}</p>
      <p className="font-medium text-slate-800">{fieldValue}</p>
    </div>
  )
}

export default NameValuePair
