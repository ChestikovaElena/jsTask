function isEven(num) {
  if (num % 2 == 0) {
   return true;
  } return false;
}

function createArrayRandomNum() {
  let mixedArray = [];
  const countOfElement = 10;

  for ( i = 0; i < countOfElement; i++ ) {
  mixedArray.push( Math.round( Math.random() * 50 ));
  } 
  console.log(mixedArray);
  return mixedArray;
}

function filterArray(array) {
  let resultArray = [];
  for (let i = 0; i < array.length; i++) {
    if (isEven(array[i])) {
      resultArray.push(array[i]);
    }
  }
  return resultArray;
}

console.log(filterArray(createArrayRandomNum()));