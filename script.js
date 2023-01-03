function upadteCaseNumber(isIncreasing, product, price) {
  const caseInput = document.getElementById(product + "-input");
  let caseNumber = caseInput.value;
  if (isIncreasing == true) {
    caseNumber = parseInt(caseNumber) + 1;
  } else if (caseNumber > 0) {
    caseNumber = parseInt(caseNumber) - 1;
  }
  caseInput.value = caseNumber;
  //update case total
  const caseTotal = document.getElementById(product + "-total");
  caseTotal.innerText = price * caseNumber;
  calculateTotal();
}

function getInputValue(product) {
  const total = document.getElementById(product + "-input");
  const totalNumber = parseInt(total.value);
  return totalNumber;
}

function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1219;
  const caseTotal = getInputValue("case") * 59;
  const subTotal = phoneTotal + caseTotal;
  const tex = subTotal / 10;
  const total = subTotal + tex;
  document.getElementById("subtotal").innerText = subTotal;
  document.getElementById("tax-amount").innerText = tex;
  document.getElementById("total").innerText = total;
}

//updating case total
document.getElementById("case-plus").addEventListener("click", function () {
  upadteCaseNumber(true, "case", 59);
});

document.getElementById("case-minus").addEventListener("click", function () {
  upadteCaseNumber(false, "case", 59);
});

//updating phone total

document.getElementById("phone-plus").addEventListener("click", function () {
  upadteCaseNumber(true, "phone", 1219);
});
document.getElementById("phone-minus").addEventListener("click", function () {
  upadteCaseNumber(false, "phone", 1219);
});
