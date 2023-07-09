var intervalId = 0;
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
function getRandomNumber(){
    return Math.floor(Math.random() * 800)
}
function stop(){
    clearInterval(intervalId);
}