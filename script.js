// copy button function
const copyIcons = document.querySelectorAll("i.fa-copy");

copyIcons.forEach(function (icon) {
  const copyButton = icon.closest("button");

  copyButton.addEventListener("click", function () {
    const parentCard = copyButton.closest("div");

    const allHeadings = parentCard.querySelectorAll("h2");

    const number = allHeadings[1].innerText;

    navigator.clipboard.writeText(number);

    alert("নাম্বার কপি হয়েছে: " + number);
  });
});

// .......reuseable code............../

//string to number convert
function strToNum(id) {
  const numVar = parseInt(document.getElementById(id).innerText);
  return numVar;
}

const allHart = document.getElementsByClassName("hart");
for (const hart of allHart) {
  hart.addEventListener("click", function () {
    const hartValue = strToNum("hart-value");
    const final = hartValue + 1;
    document.getElementById("hart-value").innerText = final;
  });
}

