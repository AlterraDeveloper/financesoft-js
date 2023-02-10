//reduce
console.group("reduce");
const reduceResult = numbers.reduce((sum, val) => {
  // console.log("sum = ", sum);
  sum += val;
  return sum;
}, 0);
//0 + 2 + 4 + 6 + 8 ....
//2 + 4 + 6 + 8 ....
// const myFilterResult = myFilter(numbers, (val) => val >= 10);
console.log("Original:", numbers);
console.log("Reduce:", reduceResult);
// console.log("My Filter:", myFilterResult);
console.groupEnd();

const OddEvenSumArray = numbers.reduce(
  (sumArr, val) => {
    sumArr[0] += val % 2 === 0 ? val : 0;
    sumArr[1] += val % 2 !== 0 ? val : 0;
    return sumArr;
  },
  [0, 0]
);
console.log({ OddEvenSumArray });

// если не указываем начальное значение параметру min,
// то reduce устанавливает его в первое значение из массива
// и начинает циклом пробегать начиная со второго элемента массива
[4, 5, 7, 8, 1, 4, 5].reduce((min, val) => {
  console.log(`${min} ? ${val}`);
  return min < val ? min : val;
});
