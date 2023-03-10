// console.log("1");

// window.setTimeout(() => console.log("2"), 2000);

// console.log("3");

// window.setTimeout(() => {
//     console.log("4");
// //   throw new Error("timeout error");
// }, 2000);

// console.log("5");

//Promise - обещание

const sleep = function (msec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, msec);
  });
};

const getBigSum = () =>
  new Promise((resolve, reject) => {
    let bigSum = 0;
    for (let i = 0; i < 500_000_000; i++) bigSum += i;
    resolve(bigSum);
  });

//IIFE - Immediately Invoked Function Expression

(async () => {
  console.log("1");
  const bigSum1 = await getBigSum();
  console.log(bigSum1);
  //   await sleep(1000); //.then(() => {console.log("2");});
  console.log("3");
  const bigSum2 = await getBigSum();
  console.log(bigSum2);
  //   await sleep(1000); //.then(() => {console.log("4");});
  console.log("5");
})();

(function () {
  var document = {
    Title: "AccountStatement",
    Type: "xlsx",
    Body: [],
  };
  console.log(document);
  console.log(window.document);
})();

const throwAsync = () =>
  new Promise((resolve, reject) => {
    console.log("Start process...");
    setTimeout(() => {
      resolve(new Error("Error in process..."));
      //   throw new Error("Error in process...");
    }, 1000);
  });

(async () => {
  try {
    await throwAsync();
  } catch (error) {
    console.error("Async process result: ", error);
  }
})();

throwAsync()
  .then((data) => {
    console.log("Success process...");
    console.log(data);
  })
  .catch((error) => {
    console.error("Async process result: ", error);
    console.log(typeof error);
  });

getCommissionAsync().then((commission) => {
  const transferSum = vm.TransferSum() + commission;
  const response = saveTransferAsync(vm);
}).catch();
