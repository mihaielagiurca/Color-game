var numberOfSquares = 6;
var colors = generateRandomColor(numberOfSquares);
var squareColor = document.querySelectorAll(".square");
var pickedColor = randomColor();
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var result = document.querySelector("#result");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var beginnerButton = document.querySelector("#beginnerButton");
var advancedButton = document.querySelector("#advancedButton");
var selectedButton = document.querySelector(".selected");


//the new color button eventListener
resetButton.addEventListener("click", function(){
    numberOfSquares = 6;
    colors = generateRandomColor(numberOfSquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i< squareColor.length; i++){
        squareColor[i].style.backgroundColor = colors[i];
    }
    h1.style.backgroundColor = "#7FFFD4";
    result.textContent = "";
    resetButton.textContent = "New colors";
});

beginnerButton.addEventListener("click", function(){
    beginnerButton.classList.add("selected");
    advancedButton.classList.remove("selected");  
    numberOfSquares = 3;
    colors = generateRandomColor(numberOfSquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squareColor.length; i++){
        squareColor[i].style.backgroundColor = colors[i];
    } 
    for (var i= 3; i< squareColor.length; i++){
        squareColor[i].style.display = "none";
    }
    h1.style.backgroundColor = "#7FFFD4";
});

advancedButton.addEventListener("click", function(){
    advancedButton.classList.add("selected");
    beginnerButton.classList.remove("selected");  
    numberOfSquares = 6;
    colors = generateRandomColor(numberOfSquares);
    pickedColor = randomColor();
    colorDisplay.textContent = pickedColor;
    for (var i=0; i<squareColor.length; i++){
        squareColor[i].style.backgroundColor = colors[i];
    } 
    for (var i= 3; i< squareColor.length; i++){
        squareColor[i].style.display = "block";
    }
    
    h1.style.backgroundColor = "#7FFFD4";
});


for(var i=0; i< colors.length; i++){
    // add background-color to the squares
    squareColor[i].style.backgroundColor = colors[i];
    // add event to the squares
    squareColor[i].addEventListener("click", function(){
       
     var clickedColor = this.style.backgroundColor;
        if(clickedColor !== pickedColor){
            this.style.backgroundColor= "#232452";
            result.textContent = "TRY AGAIN!"; 
        }
        else  {
           result.textContent = "YOU WON!!!"
           changeColorAllSquares(clickedColor);
           h1.style.backgroundColor = clickedColor; //changes the background color of h1 with the matching color
           resetButton.textContent = "Play Again";
               
        } 
        
    });
}

// function changes all the squares to match the giving color 
function changeColorAllSquares(color){
    for (var i=0; i< squareColor.length; i++){
        squareColor[i].style.backgroundColor = color;

    }
}

// function that generates the random color that we have to match
function randomColor(){
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

// function push the random colors generated in the array
function generateRandomColor(num){
    var arr=[];
    for(var i=0; i< num; i++){
        arr.push(arrRandomColor());
    }
    return arr;
}

// function that generates each random rgb color in the array
function arrRandomColor(){
    var red = Math.floor(Math.random() * 256); // random number for red
    var green = Math.floor(Math.random() * 256);  // random number for green
    var blue = Math.floor(Math.random() * 256);  // random number for blue;
    return "rgb(" +red + ", " + green+ ", " + blue+ ")";
}

