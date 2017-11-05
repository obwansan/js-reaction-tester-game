/**
* Different sized circles and squares appear randomly:
    - random position on the screen
    - random size
    - random colour
    - randomly a square or a circle
    - random time interval 
* They disappear when you click them.
* There's a timer that logs the time it takes from their appearing to being clicked is printed on screen to 3 decimal places.
**/

const div =  document.querySelector('div');
const circle = 0;
const square = 1;
let startTime = 0;
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Function to choose circle or square
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; 
}
// Function to set random appearance interval
function getRandomInterval(min, max) {
  return (Math.floor(Math.random() * (max - min + 1)) + min) * 1000; 
}
// Function to get random colour
function getRandomColour() {
    return (Math.floor(Math.random() * colours.length));
}
// Function converts milliseconds to mins/secs
function millisToSecsAndMs(millis) {
  const seconds = Math.floor(millis / 1000);
  const ms = (millis % 1000);
  return (seconds + "." + ms);
}

function createShape() {
    // randomly choose type
    const shape = getRandomInt(0, 1);
    div.style.display = '';
    if (shape === circle) {
        div.className = "circle";
    } else {
        div.className = "square";
    }
    // randomly set colour
    const colour = getRandomColour();
    for (let i = 0; i < colours.length; i++) {
        div.style.backgroundColor = colours[colour];
    }
    //randomly set size
    const dimension = getRandomInt(50, 250) + 'px';
    div.style.width = dimension;
    div.style.height = dimension;
    
    //randomly set position
    const marginTop = getRandomInt(0, 700) + 'px';
    div.style.marginTop = marginTop;
    const marginLeft = getRandomInt(0, 700) + 'px';
    div.style.marginLeft = marginLeft;
    
    // get start time
    startTime = Date.now();
}

// get time delay
let delay = getRandomInterval(1, 3);
    
// shape appears at random interval
setTimeout(createShape, delay);

// when I click on shape, it disappears and new setTimeout(setShape, delay) is triggered.

div.addEventListener('click', function () {
    //make shape disappear
    div.style.display = 'none';
    //set new setTimeout
    setTimeout(createShape, delay);
    //get milliseconds between shape appearing and clicking it
    const endTime = Date.now();
    const difference = (endTime - startTime);
    const secsAndMs = millisToSecsAndMs(difference);
    //display time
    const yourTime = document.getElementById('yourTime');
    yourTime.textContent = secsAndMs + 's';
});


























    
    

