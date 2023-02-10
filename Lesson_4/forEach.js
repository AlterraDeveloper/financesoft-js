const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//forEach
console.group("forEach");
const forEachResult = numbers.forEach((val, index, array) => {
  index === 0 ? console.log(array) : "";
  numbers[index] = val * 2;
  console.log(`[${index}] = ${numbers[index]}`);
});
console.log(numbers);
console.groupEnd();
