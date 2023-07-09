//playCraps, rollDie
function playCraps(){
    console.log("playCraps function called");

    //first roll of the die
    var die1 = rollDie();
    console.log("The first die roll is: " + die1);

    //second roll of the die
    var die2 = rollDie();
    console.log("The second die roll is: " + die2);

    //adding the rolls together
    var sum = die1 + die2;
    console.log("The sum of the two die is: " + sum);

    //output the die rolls and the sum to the HTML page
    document.getElementById("die1Res").innerHTML = "Die 1 is: " + die1;
    document.getElementById("die2Res").innerHTML = "Die 2 is: " + die2;
    document.getElementById("sumRes").innerHTML = "The sum is: " + sum;

    //do the logic to see if the dice rolls win or lose
    if (sum == 7 || sum == 11){
        document.getElementById("crapsRes").style.color = "tomato";
        document.getElementById("crapsRes").innerHTML = "You Lose!";
    }
    else if(die1 == die2 && die1 % 2 == 0){
        document.getElementById("crapsRes").style.color = "springgreen";
        document.getElementById("crapsRes").innerHTML = "You Win!";  
    }
    else{
        document.getElementById("crapsRes").style.color = "yellow";
        document.getElementById("crapsRes").innerHTML = "You Pushed!";
        }   
    }

    //generate a random number between 1 and 6
    //using built in JavaScript math functions
    function rollDie(){
        var die = 6 * Math.random();
        return Math.ceil(die);
    }
//start, getRandomNumber, stop   
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
//validateForm
function validateForm(){
    //variables to hold form inputs
    var givenName = document.markForm.givenName.value;
    var surName = document.markForm.surName.value;
    var zipCode = document.markForm.zipCode.value;
    //var zipCode = document.getElementById("zipCode").value; also works
    var errMessage = document.getElementById("errorMessage");
    //Clear out error message
    errMessage.innerHTML = "";
    //concatenate givenName surName
    var fullName = givenName + " " + surName;
    //check the length of the name to determine if it's a real name
    if(fullName.length > 20 || fullName.length < 8){
        errMessage.innerHTML = "By jove, surely you jest! Were you conceived in a vat of alphabet soup, or were your mother and father merely illiterate? Try again!"
        return false;
    }
    //check if zip is valid length
    if(zipCode.length != 5){
        errMessage.innerHTML = "There's no place from which that code could be, are you sure you've learned your numbers?"
        return false;
    }
    //displays entryGranted if valid input
    document.getElementById("entryGranted").innerHTML = "Don't worry, I have a cunning plan..."
    return false; 
    }