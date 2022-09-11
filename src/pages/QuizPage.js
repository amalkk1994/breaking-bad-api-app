import Question from "../components/Question"

const QuizPage = () => {
  return (
    <div>
      <p>Quiz page</p>
      <Question
        question="Who is heisenBerg???"
        questionId="1"
        options={["Chemistry teacher", "Drug lord", "Car wash guy", "Old man"]}
      />
    </div>
  )
}

export default QuizPage
