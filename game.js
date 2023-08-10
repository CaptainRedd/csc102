//creates variable for canvas width
var canvasWidth = 600;
//creates variable for canvas height
var canvasHeight = 400;
//Create player variable
var player;
//Create variable for y-position
var playerYPosition = 200;
//create variable for fall speed
var fallSpeed = 0;
//create new interval
var interval = setInterval(updateCanvas, 20);
//create jumping boolean
var isJumping = false;
//create jumpSpeed variable, initial valye of 0
var jumpSpeed = 0;
//create block variable
var block;
//create a starting score of 0
var score = 0;
//create variable to hold scoreLabel
var scoreLabel;

//Starts the game
function startGame() {
    gameCanvas.start();
//Create the player using the function
    player = new createPlayer(30, 30, 10);
//assign block variable with value from createBlock
    block = new createBlock();
//assign scoreLabel a value from ScoreLabel()
    scoreLabel = new createScoreLabel(10, 30);
}

//Creates canvas with a function
var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}
//creates the player assigned to player variable
function createPlayer(width, height, x) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = playerYPosition;
//draw function to draw player
    this.draw = function() {
        ctx = gameCanvas.context;
        ctx.fillStyle = "green";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
//makeFall function to make player fall
    this.makeFall = function() {
        if (!isJumping) {
        this.y += fallSpeed;
        fallSpeed += 0.1;
//call the stopPlayer function
        this.stopPlayer();
        }
    }
//stopPlayer function to stop at the ground
    this.stopPlayer = function() {
        var ground = canvasHeight - this.height;
        if (this.y > ground){
            this.y = ground;
        }
    }
//Jump function
    this.jump = function() {
        if (isJumping) {
        this.y -= jumpSpeed;
        jumpSpeed += 0.3;
        }
    }
}
//function to draw blocks on the canvas
function createBlock() {
    var width = randomNumber(25,100);
    var height = randomNumber(25,250);
    speed = randomNumber(6,10);
    this.x = canvasWidth;
    this.y = canvasHeight - height;
//draws the block on canvas using x, y, width, height
    this.draw = function() {
        ctx = gameCanvas.context;
        ctx.fillStyle = "red";
        ctx.fillRect(this.x, this.y, width, height);
    }
//moves the block to 'attack' the player and calls reset function
    this.attackPlayer = function() {
        this.x -= speed;
        this.returnToAttackPosition();
    }
//creates a new block when previous one reaches the edge
    this.returnToAttackPosition = function() {
        if (this.x < 0) {
            width = randomNumber(25,100);
            height = randomNumber(50,250);
            speed = randomNumber(6,10);
            this.y = canvasHeight - height;
            this.x = canvasWidth;
//Increase score if block reaches the edge
            score++;
        }
    }
    
}
//function to update the canvas with player, block, and scoreboard functions
function updateCanvas(){
//check for collision every time you update the canvas
    detectCollision();

    ctx = gameCanvas.context;
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
//Calls functions from within createPlayer function
    player.makeFall();
    player.draw();
    player.jump();
//calls functions from within createBlock function
    block.draw();
    block.attackPlayer();
//calls functions from within createScoreLabel function
    scoreLabel.draw();
    scoreLabel.text = "Score: " + score;
    scoreLabel.draw();
}
//function used to detect collision
function detectCollision() {
//defines variables for player and block edges
    var playerLeft = player.x;
    var playerRight = player.x + player.width;
    var blockLeft = block.x;
    var blockRight = block.x + block.width;
    var playerBottom = player.y + player.height;
    var blockTop = block.y;
//calls stop() function if conditions are met (doesn't actually exist, just hit refresh)
    if (playerRight > blockLeft &&
        playerLeft < blockLeft &&
        playerBottom > blockTop) {
    gameCanvas.stop();
        }
}
//draws Score at defined position
function createScoreLabel(x, y) {
    this.score = 0;
    this.x = x;
    this.y = y;
    this.draw = function() {
        ctx = gameCanvas.context;
        ctx.font = "25px Blackadder";
        ctx.fillStyle = "goldenrod";
        ctx.fillText(this.text, this.x, this.y);
    }
}
//create a randomNumber() function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
} 
//create resetjump() function
function resetJump() {
    jumpSpeed = 0;
    isJumping = false;
}
//create event to toggle isJumping boolean and call resetJump function
window.addEventListener(
    "keydown",
    (KeyboardEvent) => {
        if (KeyboardEvent) 
        switch (KeyboardEvent.code) {
            case "Space":
                isJumping = true;
                setTimeout(function() { resetJump(); }, 1000);
        }

    }
)
