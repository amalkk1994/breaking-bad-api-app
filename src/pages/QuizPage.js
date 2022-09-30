import { useEffect } from "react"
import Question from "../components/Question"
import { formQuestion } from "../utilities/functionalAPIs"

const QuizPage = () => {
  useEffect(() => {
    formQuestion(4, "nickname")
  }, [])

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
