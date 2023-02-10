//map
console.group("map");
const mapResult = numbers.map((val, index, array) => {
  return val ** 2;
});
const myMapResult = myMap(numbers, (val) => val ** 2);
console.log("Original:", numbers);
console.log("Map:", mapResult);
console.log("My Map:", myMapResult);
console.groupEnd();

function myMap(array, mapCallBack) {
  const arr = [];
  for (const item of array) {
    arr.push(mapCallBack(item));
  }
  return arr;
}

const accounts = [
  {
    accountNo: "1161589498489489",
    currencyID: 417,
  },
  {
    accountNo: "1161589498489489",
    currencyID: 840,
  },
  {
    accountNo: "1161589498489489",
    currencyID: 978,
  },
  {
    accountNo: "1161589498489489",
    currencyID: 643,
  },
];

const accountsForFront = accounts.map(
  (account) => `${account.accountNo}_${account.currencyID}`
);
console.log("Original accounts", accounts);
console.log({ accountsForFront });


