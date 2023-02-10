//callbacks - функции обратного вызова

//JSdoc

/**
 *  Функция по форматированию чего угодно))
 * @param { * } value Форматируемое значение
 * @param {*} formatter Callback для выполнения форматирования
 * @returns Значение value  в заданном формате
 */
function format(value, formatter) {
  return formatter(value);
}

const text = "eugene";
const age = 125;
const bool = true;

// function convertYesNo(value) {
//   return value ? "Yes" : "No";
// }
const convertYesNo = (value) => (value ? "Yes" : "No");

console.log(
  format(text, function (value) {
    return value.toUpperCase();
  })
);
console.log(format(age, (value) => value.toString().padStart(11, "0")));
console.log(format(bool, convertYesNo));


//map, filter, reduce

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