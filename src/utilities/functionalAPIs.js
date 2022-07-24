const generateUniqueRandomNumber = (inputSet, upperLimit) => {
  //  let localStorageVal = JSON.parse(localStorage.getItem("breakingBadData"));

  let randomNum = Math.floor(Math.random() * (upperLimit + 1));
  if (inputSet && inputSet.has(randomNum)) {
    generateUniqueRandomNumber(inputSet, upperLimit);
  } else {
    inputSet.add(randomNum);
    return randomNum;
  }
};

//BBDQuotes
// [1,2,3]
const fetchUpdateDataFromLocalStorage = (dataField) => {
  let localData = JSON.parse(localStorage.getItem(dataField));
  let uniqueSet;
  console.log("local data", localData);

  if (localData && localData.data) {
    uniqueSet = new Set([...localData.data]);
  } else {
    uniqueSet = new Set();
  }

  const randNum = generateUniqueRandomNumber(uniqueSet, 102);
  console.log("randomNum", randNum);
  uniqueSet.add(randNum);

  console.log("uniqueSet", uniqueSet);

  localStorage.setItem(
    dataField,
    JSON.stringify({ data: Array.from(uniqueSet) })
  );

  return randNum;
};

export { generateUniqueRandomNumber, fetchUpdateDataFromLocalStorage };
