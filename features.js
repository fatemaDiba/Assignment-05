document.getElementById("history-btn").addEventListener("click", function () {
  window.location.href = "history.html";
});

document.getElementById("donation-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});

document
  .getElementById("donateNow-btn")
  .addEventListener("click", function (event) {
    event.preventDefault;
    const inputAmount = elementFloat("input-tk");
    const Amount = elementFloat("defaultAmount");
    if (!isNaN(inputAmount) && inputAmount > 0) {
      const newAmount = Amount + inputAmount;
      document.getElementById("defaultAmount").innerText = newAmount;
    } else {
      alert("Invalid amount");
    }
  });

let a = elementFloat("defaultAmount");
console.log(a);
