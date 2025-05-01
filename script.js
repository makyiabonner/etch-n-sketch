/* 
Project functionality
Selecting grid size from 16-100
    storage var: rangeState, colorState(excluding rainbow states)
    functionality var: setClear(), setColor(input), setOpacity(element.target), handleRainbow()
    -Grid should match users requested boxes
        -Have a slider input that has event listener to change amount
        -should be input type range with value being sent to rangeState
    
    -When changing scale size all buttons are reset to clear
        -should have a class when toggled, clears everything
        -should have button with event listener to toggle empty class

    -Grid should grow while scale is changed
        -should have event listener on range to change while activated

    -Grid should allow users to select color
        -should have input type color with value being sent to colorState

    -Grid should have a opacity increaser
        -should have an opacity of 10% initially but additionally increases by ten when re-highlighted

    -Grid should allow users to have rainbow color
        -should change color each event activated
        -should use inline styling for randomized coloring in rgb format
*/

//Storage
let rangeState = null;
let colorState = null;
let currentColor = null;
let rainbowState = null;

//functionality
//clear grid
function setClear() {
  BUTTON.style.backgroundColor = "white";
}

//set btn color
function setColor(input) {
  if (rainbowState) {
    rainbowState = false;
    colorState = true;
  }
  return (currentColor = input);
}

//set btn opacity
function setOpacity(e) {
  let currentOpacity = e.target.style.opacity.slice(0, 3) + 10;
  e.target.style.opacity = `${currentOpacity}%`;
}

//handle colored btn
function handleColor() {
  if (rainbowState) {
    rainbowState = false;
    colorState = true;
  }
  return (e.target.style.backgroundColor = currentColor);
}

//handle rainbow colored btn
function handleRainbow() {
  if (colorState) {
    colorState = false;
    rainbowState = true;
  }
  const randomNum = Math.floor(Math.random() * 256);
  element.target.style.backgroundColor = rgb(randomNum, randomNum, randomNum);
}

//creating DOM elements
const TITLE = document.createElement("h1");
const CONTAINER = document.createElement("container");

//state changer
TITLE.textContent = "Welcome to Etch-n-sketch";
