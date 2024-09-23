document.getElementById("history-btn").addEventListener("click", function () {
  window.location.href = "history.html";
});

document.getElementById("donation-btn").addEventListener("click", function () {
  window.location.href = "index.html";
});


donation("donateNow-btn", "input-tk", "defaultAmount");
donation("donateNow-btn2", "input-tk2", "defaultAmount2");
donation("donateNow-btn3", "input-tk3", "defaultAmount3");
