const generateUniqueRandomNumber = (inputSet, upperLimit) => {
  //  let localStorageVal = JSON.parse(localStorage.getItem("breakingBadData"));
  console.log("upperLimit", upperLimit);

  let randomNum = Math.floor(Math.random() * (upperLimit + 1));
  console.log("randNum - generateunique", randomNum);
  if (inputSet && inputSet.has(randomNum)) {
    return generateUniqueRandomNumber(inputSet, upperLimit);
  } else {
    inputSet.add(randomNum);
    return randomNum;
  }
};

//BBDQuotes
// [1,2,3]
const fetchUpdateDataFromLocalStorage = (dataField, fieldLength) => {
  let localData = JSON.parse(localStorage.getItem(dataField));
  let uniqueSet;
  console.log("local data", localData);

  if (localData && localData.data) {
    uniqueSet = new Set([...localData.data]);
    if (uniqueSet.size === fieldLength) {
      // maximum reached, clear the list
      localStorage.setItem(dataField, JSON.stringify({ data: [] }));
    }
  } else {
    uniqueSet = new Set();
  }

  const randNum = generateUniqueRandomNumber(uniqueSet, fieldLength);
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
