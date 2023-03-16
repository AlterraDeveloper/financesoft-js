document.body.onload = function () {
  var div = document.getElementById("div");
  console.log(div);
};

//1) CDN / via link (Content Delivery Network)
console.log(moment());

//2) Download dependency

import ko from "knockout";

console.log("I use knockout ", ko.version);

//3) NPM - Node Package Manager
// YARN
// import { createAccount as ca, replenishAccount, withdrawAccount, getRandomInt } from "./accountHelper";
import * as AccountHelper from "./accountHelper"

function createAccount(balanceGroup){
    const no = AccountHelper.getRandomInt(1, 10_000);
    return `${balanceGroup}${no.toString().padStart(11, "0")}`
}


const accountBuilder = AccountHelper.createAccount();
const account1 = accountBuilder.build("10102");

console.log(account1);

AccountHelper.withdrawAccount(account1, 100);


console.log(account1);

console.log("Global this is", this);
