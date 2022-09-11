const Question = (props) => {
  function submitHandler(e) {
    e.preventDefault()
  }

  return (
    <>
      <h1>Question</h1>
      <form onSubmit={submitHandler} className="mt-4">
        <p className="text-2xl font-semibold">
          {props.questionId + ". " + props.question}
        </p>
        <ul className="mt-4">
          {props.options.map((option) => {
            return (
              <li key={option}>
                <input type="radio" name="answers" value={option} id={option} />
                <label for={option} className="text-xl ml-2">
                  {option}
                </label>
              </li>
            )
          })}
        </ul>
        <button className="bg-emerald-600 text-white py-2 px-4 font-semibold mt-4">
          Next
        </button>
      </form>
    </>
  )
}

export default Question
