let billInput = document.getElementById("bill-input");
let pplInput = document.getElementById("no-of-ppl");
let tipPercentageInput = document.getElementById("tippercentage-input");
let tipResult = document.getElementById("tip-amount");
let totalResult = document.getElementById("total-amount");
let calcButton = document.getElementById("calc");

let billValue = 0.0;
billInput.onchange = function () {
  billValue = parseFloat(billInput.value);
};

let peopleAmount = 0;
pplInput.onchange = function () {
  peopleAmount = parseFloat(pplInput.value);
};

function calcTip(tipPercentage) {
  return billValue * peopleAmount * (tipPercentage / 100);
}

calcButton.onclick = function () {
  tipResult.value = calcTip(tipPercentageInput.value);
  totalResult.value = +tipResult.value + billValue * peopleAmount;
};
