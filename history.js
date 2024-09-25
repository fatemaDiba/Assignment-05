function getHeading(id) {
  let parent = document.getElementById(id).parentNode.parentNode;
  let heading = parent.nextElementSibling.innerText;
  return heading;
}

function getHistory(donationFor, amount) {
  let historyDiv = document.createElement("div");
  const date = new Date();
  historyDiv.classList.add(
    "p-8",
    "border",
    "border-[#111111]/30",
    "rounded-2xl",
    "mx-auto",
    "mt-5"
  );
  let historyHeading = document.createElement("h3");
  historyHeading.classList.add("text-[#111111]", "text-lg","mb-2");
  historyHeading.innerText = `${amount} Taka is donated for ${donationFor}`;
  let historyDate = document.createElement("p");
  historyDate.classList.add("text-[#111111]/70", "text-sm", "font-light");
  historyDate.innerText = `Date: ${date}`;

  historyDiv.append(historyHeading, historyDate);
  document.getElementById("historyContainer").appendChild(historyDiv);
}
