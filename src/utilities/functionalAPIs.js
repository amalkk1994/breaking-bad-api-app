import axios from "axios"

const generateUniqueRandomNumber = (dataField, inputSet, upperLimit) => {
  //  let localStorageVal = JSON.parse(localStorage.getItem("breakingBadData"));
  console.log("upperLimit", upperLimit)
  console.log("input set size", inputSet.size)

  if (inputSet.size >= upperLimit) {
    // maximum reached, clear the list
    console.log("clear the list!")
    localStorage.setItem(dataField, JSON.stringify({ data: [] }))
  }

  let randomNum = Math.floor(Math.random() * (upperLimit + 1))
  console.log("randNum - generateunique", randomNum)
  if (inputSet && inputSet.has(randomNum)) {
    return generateUniqueRandomNumber(dataField, inputSet, upperLimit)
  } else {
    inputSet.add(randomNum)
    return randomNum
  }
}

//BBDQuotes
// [1,2,3]
const fetchUpdateDataFromLocalStorage = (dataField, fieldLength) => {
  let localData = JSON.parse(localStorage.getItem(dataField))
  let uniqueSet
  console.log("local data", localData)

  if (localData && localData.data) {
    uniqueSet = new Set([...localData.data])
  } else {
    uniqueSet = new Set()
  }

  const randNum = generateUniqueRandomNumber(dataField, uniqueSet, fieldLength)
  console.log("randomNum", randNum)
  uniqueSet.add(randNum)

  console.log("uniqueSet", uniqueSet)

  localStorage.setItem(
    dataField,
    JSON.stringify({ data: Array.from(uniqueSet) })
  )

  return randNum
}

const formQuestion = async (noOfOptions, type) => {
  /*
  let id = fetchUpdateDataFromLocalStorage("BBQuiz", 57)

  let response1 = await callApi(
    `https://www.breakingbadapi.com/api/characters/${id}`,
    5
  )

  console.log("response 1", response1)

  id = fetchUpdateDataFromLocalStorage("BBQuiz", 57)

  let response2 = await callApi(
    `https://www.breakingbadapi.com/api/characters/${id}`,
    5
  )

  id = fetchUpdateDataFromLocalStorage("BBQuiz", 57)

  let response3 = await callApi(
    `https://www.breakingbadapi.com/api/characters/${id}`,
    5
  )

  id = fetchUpdateDataFromLocalStorage("BBQuiz", 57)

  let response4 = await callApi(
    `https://www.breakingbadapi.com/api/characters/${id}`,
    5
  )

  */

  let id = fetchUpdateDataFromLocalStorage("BBQuiz", 57)
  let promise1 = axios.get(
    `https://www.breakingbadapi.com/api/characters/${id}`
  )
  id = fetchUpdateDataFromLocalStorage("BBQuiz", 57)
  let promise2 = axios.get(
    `https://www.breakingbadapi.com/api/characters/${id}`
  )
  id = fetchUpdateDataFromLocalStorage("BBQuiz", 57)
  let promise3 = axios.get(
    `https://www.breakingbadapi.com/api/characters/${id}`
  )
  id = fetchUpdateDataFromLocalStorage("BBQuiz", 57)
  let promise4 = axios.get(
    `https://www.breakingbadapi.com/api/characters/${id}`
  )

  const [response1, response2, response3, response4] = await Promise.all([
    promise1,
    promise2,
    promise3,
    promise4,
  ])

  console.log(
    "quiz api output:",
    "1." + response1?.data[0]?.name,
    "2." + response2?.data[0]?.name,
    "3." + response3?.data[0]?.name,
    "4." + response4?.data[0]?.name
  )
}

/*

const callApi = async (URL, retryCount = 5) => {
  let response = ""
  let count = 0

  response = await axios.get(URL)
  while (!response?.data[0] && count < retryCount) {
    response = await axios.get(URL)
    if (!response?.data[0]) {
      console.log("Retrying....", URL)
      count++
    }
  }
  return response
}

*/

export {
  generateUniqueRandomNumber,
  fetchUpdateDataFromLocalStorage,
  formQuestion,
}
