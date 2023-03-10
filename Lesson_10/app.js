const copyBtn = document.querySelector("#copyBtn");
const textBox = document.querySelector("#textBox");

const doAfter = (ms, callback) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        callback();
        resolve();
      } catch (error) {
        reject(error);
      }
    }, ms);
  });

copyBtn.onclick = async () => {
  console.log("Coping start...");
  await navigator.clipboard.writeText(textBox.value);
  textBox.value = "Successfully copied";
  try {
    await doAfter(2000, () => {
      throw new Error("doAfter error");
      textBox.value = "";
    });
    console.log("Successfully copied");
  } catch (error) {
    console.log("Failed copy");
    console.error(error);
  }

  //   navigator.clipboard
  //     .writeText(textBox.value)
  //     .then(() => {
  //       //   throw new Error("Another error");
  //       textBox.value = "Successfully copied";
  //       return doAfter(2000, () => {
  //         // throw new Error("Timeout error");
  //         textBox.value = "";
  //       });
  //     })
  //     .then(() => {
  //       console.log("Successfully copied");
  //     })
  //     .catch((error) => {
  //       console.log("Failed copy");
  //       console.error(error);
  //     });
  //   console.log("Coping start...");
};

//Asynchronous Javascript And Xml
$.ajax(
  "https://10.152.45.12/OnlineBank.IntegrationService/api/Deposits/Products/AvailableCurrencies",
  {
    beforeSend: () => {
      console.log("Start request...");
    },
    success: (response) => {
      console.log("Currency list response:", response);
    },
    error: (err) => {
      console.error(err);
    },
    complete: () => {
      console.log("End request...");
    },
  }
);

(async () => {
  const currencies = await fetch(
    `${baseUrl}api/Deposits/Products/AvailableCurrencies`,
    {
      method: "GET",
      mode: "same-origin",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  const customerPhone = "+996500955800";
  const customerData = await fetch(
    `${baseUrl}api/Customers/GetInn?phone=${customerPhone}`
  );
  const depositProducts = await fetch(
    `${baseUrl}api/Deposits/Products/AvailableProducts?customerID=${customerData.CustomerID}`
  );
  const openDepositModel = {
    CustomerID: customerData.CustomerID,
    CurrencyID: currencies[Math.floor(Math.random()) * currencies.length],
    Period: 24,
  };
  const openDepositResponse = await fetch(
    `${baseUrl}api/Deposits/OpenDeposit`,
    {
      method: "POST",
      body: JSON.stringify(openDepositModel),
    }
  );
})();

fetch(`${baseUrl}${getCurrenciesUrl}`, {
  crossDomain: true,
})
  .then((currencies) => {
    return fetch(`${baseUrl}api/Customers/GetInn?phone=${customerPhone}`);
  })
  .then((customerData) =>
    fetch(
      `${baseUrl}api/Deposits/Products/AvailableProducts?customerID=${customerData.CustomerID}`
    )
  )
  .catch((error) => {
    console.log("Request error:", error);
  });
