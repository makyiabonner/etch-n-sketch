/* 
Project functionality
Selecting grid size from 16-100
    storage var: rangeState, colorState(excluding rainbow states)
    functionality var: setClear(), setColor(input), setOpacity(element.target), setRainbow()
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

//set grid range
function setRange(range = 16) {
  GRID.style.gridTemplateColumns = `repeat(${range}, 1fr)`;
  GRID.style.gridTemplateRows = `repeat(${range}, 1fr)`;
  if (GRID.firstChild) {
    GRID.textContent = "";
  }

  for (let i = 0; i < Math.pow(range, 2); i++) {
    const BUTTON = document.createElement("button");
    BUTTON.classList.add("grid-btn");

    GRID.appendChild(BUTTON);
  }
}

//set btn color
function setColor(input) {
  rainbowState = false;
  colorState = true;

  currentColor = input.target.value;
}

//set btn opacity
function setOpacity(e) {
  let currentOpacity = e.target.style.opacity.slice(0, 3) + 10;
  return (e.target.style.opacity = `${currentOpacity}%`);
}

//handle colored btn
function handleGridButton(input) {
  if (rainbowState) {
    input.target.style.backgroundColor = setRainbow();
  } else if (colorState) {
    input.target.style.backgroundColor = currentColor;
  }
}
//handle rainbow colored btn
function setRainbow() {
  rainbowState = true;
  colorState = false;

  const randomNumOne = Math.floor(Math.random() * 256);
  const randomNumTwo = Math.floor(Math.random() * 256);
  const randomNumThree = Math.floor(Math.random() * 256);
  const rainbow = `rgb(${randomNumOne}, ${randomNumTwo}, ${randomNumThree})`;
  return rainbow;
}

//creating DOM elements
const TITLE = document.createElement("h1");
const GRID = document.createElement("container");
const ROW_DIV = document.createElement("div");
const COLOR_SETTER = document.createElement("input");
const GRID_SETTER = document.createElement("input");
const RAINBOW_SETTER = document.createElement("button");

//set DOM attributes
COLOR_SETTER.setAttribute("type", "color");
GRID_SETTER.setAttribute("type", "range");
GRID_SETTER.setAttribute("min", 2);
GRID_SETTER.setAttribute("max", 16);

//set DOM classes
ROW_DIV.classList.add("input-row");
GRID_SETTER.classList.add("input-btn");
COLOR_SETTER.classList.add("input-btn");
GRID.classList.add("grid");
TITLE.textContent = "Welcome to Etch-n-sketch";
RAINBOW_SETTER.textContent = "Rainbow Mode";

//appending DOM elements
document.body.appendChild(TITLE);
document.body.appendChild(GRID);
document.body.appendChild(ROW_DIV);
ROW_DIV.appendChild(GRID_SETTER);
ROW_DIV.appendChild(COLOR_SETTER);
ROW_DIV.appendChild(RAINBOW_SETTER);

//add event-listeners
//generate buttons
COLOR_SETTER.addEventListener("input", setColor);
RAINBOW_SETTER.addEventListener("click", setRainbow);
GRID.addEventListener("mouseover", handleButton);
GRID_SETTER.addEventListener("input", (e) => setRange(e.target.value));
