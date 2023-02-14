

let num = 5;
let num2 = num;

num2++;

console.log({num});
console.log({num2});

function mutator(value){
    value = [];
    console.log("Mutated value", value);
}

console.log("Before:", {num});
mutator(num);
console.log("After:", {num});

let val = {};

console.log("Before:", val);
mutator(val);
console.log("After:", val);