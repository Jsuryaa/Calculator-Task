let memory = 0;

function clearDisplay() {
  document.getElementById("display").value = "";
}

function appendNumber(number) {
  document.getElementById("display").value += number;
}

function appendOperation(operation) {
  document.getElementById("display").value += operation;
}

function appendDecimal() {
  let displayValue = document.getElementById("display").value;

  if (!displayValue.includes(".")) {
    document.getElementById("display").value += ".";
  }
}

function deleteCharacter() {
  let displayValue = document.getElementById("display").value;
  document.getElementById("display").value = displayValue.slice(0, -1);
}

function memoryOperation(operation) {
  let displayValue = document.getElementById("display").value;
  let currentValue = parseFloat(displayValue);
  if (!isNaN(currentValue)) {
    if (operation === "M+") {
      memory += currentValue;
      document.getElementById("display").value = memory;
      clearDisplay();
    } else if (operation === "M-") {
      memory -= currentValue;
      document.getElementById("display").value = memory;
      clearDisplay();
    }
  }
}

function calculate() {
  let displayValue = document.getElementById("display").value;

  try {
    let result = eval(displayValue);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
