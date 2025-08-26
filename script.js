// .......reuseable code............../
//string to number convert
function strToNum(id) {
  const numVar = parseInt(document.getElementById(id).innerText);
  return numVar;
}

// copy button function
const copyIcons = document.querySelectorAll("i.fa-copy");
copyIcons.forEach(function (icon) {
  const copyButton = icon.closest("button");
  copyButton.addEventListener("click", function () {
    const parentCard = copyButton.closest("div");
    const allHeadings = parentCard.querySelectorAll("h2");
    const number = allHeadings[1].innerText;
    navigator.clipboard.writeText(number);
    alert("number copied : " + number);
    const copyNum = strToNum("copy-num");
    const tottalCopy = copyNum + 1;
    document.getElementById("copy-num").innerText = tottalCopy;
  });
});

const allHart = document.getElementsByClassName("hart");
for (const hart of allHart) {
  hart.addEventListener("click", function () {
    const hartValue = strToNum("hart-value");
    const final = hartValue + 1;
    document.getElementById("hart-value").innerText = final;
  });
}

// call function
const callFunc = document.getElementsByClassName("call");
for (const calls of callFunc) {
  calls.addEventListener("click", function () {
    const parentDiv=calls.closest('div')
    const serviceName=parentDiv.querySelector('.services-name').innerText;
    const serviceNum=parentDiv.querySelector('.services-num').innerText;
    const coinValue = strToNum("coins");
    if (coinValue < 20) {
      alert( 
        "  You don't have enough coins.You need at least 20 coins to make a call"
      );
      return;
    }
    alert(`calling ${serviceName} ${serviceNum}...`);
    const tottalCoin=coinValue-20;
    document.getElementById('coins').innerText=tottalCoin
  });
}
