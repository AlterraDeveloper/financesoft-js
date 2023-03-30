"use strict";

// function getUser(userID = 0) {
//   "use strict";
//   return {};
// }

// function banUsers(...usersIDs) {
//     "use strict";
//     return {};
//   }

// banUsers(5,7,14)
// banUsers(5,7,14, 12, 58)

// function authorizeUser({ login: userLogin, password }) {
// //   'use strict';
//   console.log(`${userLogin}:${password}`);
// }

// const user1 = {
//   login: "32423",
//   password: "4236r4236",
//   userID: 4849,
//   username: "euwifwbekn",
// };

// const user2 = {
//   login: "7978",
//   password: "bvuewinvklmwe",
//   userID: 4849,
//   username: "euwifwbekn",
//   createDate: "14-01-2022",
//   isLocked: false,
// };

// authorizeUser(user1);
// authorizeUser(user2);

console.group("Strict");

try {
  //a = 5; Error
  let a = 5;
  console.log(a);

  //   delete a;

  //   function sum(a, b, a) {
  //     console.log(`${a} + ${b}`);
  //     return a + b;
  //   }

  //Ограничение на дубликаты полей объекта удалены из стандарта ECMAScript 5
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

  //   console.log(customer.ID);
  // console.log(customer.nameTranslit);
  // console.log(JSON.stringify(customer));

  //   function displayThis() {
  //     console.log("THIS = ", this);
  //   }

  //   displayThis.call({});
  //   displayThis.call([]);
  //   displayThis.call(5);

  //   NaN.getValue = function () {
  //     console.log("Not a number");
  //   };

  var num1 = 0o12;
  var num2 = 30;
  console.log("SUM = ", num1 + num2);
} catch (error) {
  console.error(error);
} finally {
  console.groupEnd();
}
