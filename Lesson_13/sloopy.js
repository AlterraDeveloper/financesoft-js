console.group("Sloopy");

const a = 5;
console.log(a);

var obj = {
  a: 5,
  b: 10,
};
console.log(obj);
delete obj.b;
console.log(obj);

delete a;
console.log(a);

function sum(a, b, a) {
  console.log(`${a} + ${b}`);
  return a + b;
}

console.log("sum(4, 5) = ", sum(4, 5));
console.log("sum(4,5,5) = ", sum(4, 5, 5));

var customer = {
  ID: 450,
  nameTranslit: "qwerty",
  name: "ndv",
  surname: "bdivfe",
  typeID: 1,
  inn: "15616515616",
  ID: 520,
  nameTranslit: "123456789",
};

// console.log(customer.ID);
// console.log(customer.nameTranslit);
// console.log(JSON.stringify(customer));

function displayThis() {
  console.log("THIS = ", this); //window
}

displayThis();

NaN.getValue = function() {
    console.log("Not a number");
}

console.log("SUM = " , 012 + 30);

// NaN.getValue();

console.groupEnd();
