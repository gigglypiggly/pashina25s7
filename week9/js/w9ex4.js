function showOutput() {
    let num1 = document.querySelector('#num1').value;
    let num2 = document.querySelector('#num2').value;
    document.querySelector('#output').textContent = "The product of "+ num1 + " and " + num2 + " is " + (num1 * num2);
}

document.getElementById("btn").addEventListener("click", showOutput);
