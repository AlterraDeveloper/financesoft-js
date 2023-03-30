console.group("Sloopy");

// delete Array.prototype;
// console.log(Array.prototype);

//property descriptors: access, data

var user = {
  login: "7894",
  password: "4848",
  ID: 1,
};

var user2 = {};
Object.defineProperty(user2, "login", { value: "7894" });
Object.defineProperty(user2, "password", { get: () => "4848" });
Object.defineProperty(user2, "ID", { value: 1 });

console.log(Object.getOwnPropertyDescriptors(user));
console.log(Object.getOwnPropertyDescriptors(user2));

user.password = "123";
user2.password = "123";

for (const key in user) {
  console.log(key);
}
for (const key in user2) {
  console.log(key);
}

delete user.ID;
delete user2.ID;

console.log({ user, user2 });

var customer = {
  name: "john",
  surname: "doe",
};

customer.inn = "5648648489";

Object.preventExtensions(customer);

customer.ID = 155;

console.log({ customer });

console.groupEnd();
