//filter
console.group("filter");
const filterResult = numbers.filter((val, index, array) => {
  return val >= 10;
});
const myFilterResult = myFilter(numbers, (val) => val >= 10);
console.log("Original:", numbers);
console.log("Filter:", filterResult);
console.log("My Filter:", myFilterResult);
console.groupEnd();

function myFilter(array, filterCallback) {
  const arr = [];
  for (const item of array) {
    if (filterCallback(item)) {
      arr.push(item);
    }
  }
  return arr;
}
