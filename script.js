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

//creating DOM elements
const TITLE = document.createElement("h1");
const CONTAINER = document.createElement("container");

//state changer
TITLE.textContent = "Welcome to Etch-n-sketch";
