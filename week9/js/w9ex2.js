/*
 Name: Altai
 Student number: 101007054
 Date: 9/7/2025
 Description: 
*/

function showGreetingMessage() {
    let name = window.prompt("What is your name?");
    window.alert("Hello " + name + "!");
}
function reset() {
    window.alert("No resetting allowed!");
}
document.getElementById("btn").addEventListener("click", showGreetingMessage);
document.getElementById("reset").addEventListener("mouseover", reset);
document.getElementById("reset").addEventListener("click", reset);
