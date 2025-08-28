import convertirFizzBuzz from "./fizzbuzz.js";

document.getElementById("sumar-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputNumber = parseInt(document.getElementById("primer-numero").value, 10);
  const resultDiv = document.getElementById("resultado-div");
  const sequence = [];
  for (let i = 1; i <= inputNumber; i++) {
    sequence.push(convertirFizzBuzz(i));
  }
  resultDiv.textContent = sequence.join(", ");
});

