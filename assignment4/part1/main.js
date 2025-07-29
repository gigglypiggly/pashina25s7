// Name: Altai Pashin
// Student number: 101007054
// Date: 2025-07-29
// Description: JavaScript file for the silly story generator for part 1 of assignment 4

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 degrees fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
var inserty = ["the soup kitchen", "Disneyland", "the White House"];
var insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Bob/g, name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stones';
    const temperature =  Math.round((94 - 32) * 5/9) + ' centigrades';
    newStory = newStory.replace(/94 degrees fahrenheit/g, temperature);
    newStory = newStory.replace(/300 pounds/g, weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';


}