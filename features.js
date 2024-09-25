const stickyHeader = document.getElementById("header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    stickyHeader.classList.add(
      "sticky",
      "top-0",
      "backdrop-blur-lg",
      "drop-shadow-lg"
    );
  } else {
    stickyHeader.classList.remove(
      "sticky",
      "top-0",
      "backdrop-blur-lg",
      "drop-shadow-lg"
    );
  }
});

document.getElementById("donation-btn").addEventListener("click", function () {
  document.getElementById("cardContainer").classList.add("hidden");
  document.getElementById("historyContainer").classList.add("hidden");
  document.getElementById("cardContainer").classList.remove("hidden");

  document.getElementById("history-btn").style.backgroundColor = "transparent";
  document.getElementById("donation-btn").style.backgroundColor = "#B4F461";
});

document.getElementById("history-btn").addEventListener("click", function () {
  document.getElementById("cardContainer").classList.add("hidden");
  document.getElementById("historyContainer").classList.add("hidden");
  document.getElementById("historyContainer").classList.remove("hidden");

  document.getElementById("donation-btn").style.backgroundColor = "transparent";
  document.getElementById("history-btn").style.backgroundColor = "#B4F461";
});

donation("donateNow-btn", "input-tk", "defaultAmount");
donation("donateNow-btn2", "input-tk2", "defaultAmount2");
donation("donateNow-btn3", "input-tk3", "defaultAmount3");
