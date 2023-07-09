//sets intervalID
var intervalId = 0;
//starts function that moves image around page using randomly generated numbers and outputs results to console to be used by start button
function start(){    
    var image = document.getElementById("cunningPlan");
    intervalId =setInterval(function(){
        var changeX = getRandomNumber();
        var changeY = getRandomNumber();
        image.style.top = changeY + "px";
        image.style.left = changeX + "px";
        console.log("x=" + changeX);
        console.log("y=" + changeY);
    }, 1000);
}
//this function defines the math for the random number generator
function getRandomNumber(){
    return Math.floor(Math.random() * 800)
}
//starts function that clears the interval that continuously moves the image when the stop button is pressed
function stop(){
    clearInterval(intervalId);
}