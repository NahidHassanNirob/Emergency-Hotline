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
    const parentCard = copyButton.closest(".service-card");
    const allHeadings = parentCard.querySelectorAll("h2");
    const number = parentCard.querySelector(".services-num").innerText;
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
const callData = [];

const callFunc = document.getElementsByClassName("call");
for (const calls of callFunc) {
  calls.addEventListener("click", function () {
    const parentDiv = calls.closest(".service-card");
    const serviceName = parentDiv.querySelector(".services-name").innerText;
    const callServicesName = parentDiv.querySelector(".callServices").innerText;
    const serviceNum = parentDiv.querySelector(".services-num").innerText;
    const coinValue = strToNum("coins");
    if (coinValue < 20) {
      alert(
        "❌You don't have enough coins.You need at least 20 coins to make a call"
      );
      return;
    }
    alert(`📞 calling ${serviceName} ${serviceNum}...`);
    const tottalCoin = coinValue - 20;
    document.getElementById("coins").innerText = tottalCoin;

    const data = {
      name: callServicesName,
      num: serviceNum,
      date: new Date().toLocaleTimeString(),
    };
    callData.push(data);
    const parent = document.getElementById("history-container");
    parent.innerText = "";

    for (const value of callData) {
      const div = document.createElement("div");
      div.innerHTML = `
      
          <div  class="flex gap-1 justify-between items-center bg-[#F2F4F6] p-2 rounded-md  mb-2">
            
            <div class="">
              <h2 class=" italic text-xs ">${value.name}</h2>
              <p class="italic text-xs text-gray-500">${value.num}</p>
            </div>
            <p class="text-xs italic ">${value.date}</p>
          </div>

        
      `;
      parent.appendChild(div);
    }
  });
}

// clear history
document.getElementById('clear').addEventListener("click",function(){
  const parent = document.getElementById("history-container");
  parent.innerText = ''; 
  callData.length=0;



})

