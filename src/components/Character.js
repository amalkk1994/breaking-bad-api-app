import NameValuePairForGrid from "./NameValuePairForGrid"

const Character = (props) => {
  /*
  const apiDataDummy = [
    {
      char_id: 1,
      name: "Walter White",
      birthday: "09-07-1958",
      occupation: ["High School Chemistry Teacher", "Meth King Pin"],
      img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      status: "Presumed dead",
      nickname: "Heisenberg",
      appearance: [1, 2, 3, 4, 5],
      portrayed: "Bryan Cranston",
      category: "Breaking Bad",
      better_call_saul_appearance: [],
    },
  ]

  */
  // const apiData = props.data.length > 0 ? props.data : apiDataDummy
  const apiData = props.data

  return (
    <div
      className={`flex flex-col bg-slate-200 p-5 mx-auto ${props.scale} min-w-min`}
    >
      <h1 className="text-2xl font-black mb-4 text-slate-800 text-center">
        {apiData?.name}
      </h1>
      <img
        src={apiData?.img}
        alt={apiData?.name}
        className="h-40 self-center mb-6"
      />
      <div className="grid grid-cols-1 gap-y-2 bg-slate-100 p-5">
        <NameValuePairForGrid
          fieldName="Birth Day"
          fieldValue={apiData?.birthday}
        />
        <NameValuePairForGrid
          fieldName="Occupation"
          fieldValue={apiData?.occupation[0]}
        />
        <NameValuePairForGrid
          fieldName="Nick name"
          fieldValue={apiData?.nickname}
        />
        <NameValuePairForGrid
          fieldName="Portrayed By"
          fieldValue={apiData?.portrayed}
        />
      </div>
    </div>
  )
}

export default Character
