console.log("Test3");

function showOutput() {
    let name = document.querySelector('#first-name').value;
    document.querySelector('#output').textContent = "Hello " + name + "!";
}

document.getElementById("btn").addEventListener("click", showOutput);;