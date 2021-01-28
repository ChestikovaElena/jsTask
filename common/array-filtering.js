const isEven = num => {
  return num % 2 == 0
}

function createArrayRandomNum() {
  const mixedArray = [];
  const countOfElement = 10;

  for ( i = 0; i < countOfElement; i++ ) {
  mixedArray.push( Math.round( Math.random() * 50 ));
  }
  return mixedArray;
}

const filterArray = ( array, filterFn ) => {
  const resultArray = [];

  array.forEach(num => {
    if (filterFn(num)) {
      resultArray.push(num);
    }
  })

  return resultArray;
}

const mixedArray = createArrayRandomNum();
console.log(mixedArray);
console.log(filterArray(mixedArray, isEven));