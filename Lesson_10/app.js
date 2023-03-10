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

  navigator.clipboard
    .writeText(textBox.value)
    .then(() => {
      //   throw new Error("Another error");
      textBox.value = "Successfully copied";
      return doAfter(2000, () => {
        // throw new Error("Timeout error");
        textBox.value = "";
      });
    })
    .then(() => {
      console.log("Successfully copied");
    })
    .catch((error) => {
      console.log("Failed copy");
      console.error(error);
    });
  console.log("Coping start...");
};
