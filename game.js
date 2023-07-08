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