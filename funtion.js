function element(id) {
  const e = document.getElementById(id);
  return e;
}

function elementText(id) {
  let e = document.getElementById(id).innerText;
  let floatE = parseFloat(e);
  return floatE;
}

function elementValue(id) {
  let e = document.getElementById(id).value;
  let floatE = parseFloat(e);
  return floatE;
}

function donation(btn, inputTk, defaultTk) {
  document.getElementById(btn).addEventListener("click", function (event) {
    event.preventDefault();
    const inputAmount = elementValue(inputTk);
    const Amount = elementText(defaultTk);
    if (!isNaN(inputAmount) && inputAmount > 0) {
      const newAmount = Amount + inputAmount;
      const balance = elementText("mainBalance");
      if (balance > inputAmount) {
        document.getElementById(defaultTk).innerText = newAmount;
        document.getElementById(inputTk).value = " ";
        const newBalance = balance - newAmount;
        document.getElementById("mainBalance").innerText = newBalance;
        document.getElementById("my_modal").showModal();
        let historyHeading = getHeading(defaultTk);
        getHistory(historyHeading, inputAmount);
      } else {
        alert("Not enough balance");
      }
    } else {
      alert("Invalid Amount");
    }
  });
}
