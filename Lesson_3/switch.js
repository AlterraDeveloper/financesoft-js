const operarationTypeId = "3";

switch (Number(operarationTypeId)) { // ===
  case 1:
    console.log("clering");
    break;
  case 2:
    console.log("gross");
    break;
  case 3:
    console.log("swift");
    break;
  case 4:
    console.log("conversion");
    break;
}

console.group("simple numbers");
console.log(1);
console.log(2);
console.log(3);
console.groupEnd();

const cardType = "VISA"
switch (cardType) {
    case "VISA":
        console.log("get balance from VISA");
        break;
    case "ELCARD":
        console.log("get balance from IPC");
        break;
    case "MASTERCARD":
    case "MAESTRO":
        console.log("get balance from MasterCard");
        break;

    default:
        break;
}


const bigAmount = 5_0_000_000n;
console.log(typeof bigAmount);
console.log({bigAmount });


