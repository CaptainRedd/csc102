//isPalindrome
function isPalindrome(strToTest){
    // replace(/\s/g, "") remove all the spaces in the string
    //then converts all characters to lowercase
        var strCleaned = strToTest.replace(/\s/g, "").toLowerCase();
    //string to array, reverse contents, turn array back to string
        var strRev = strCleaned.split("").reverse().join("");
    
        return strRev == strCleaned;
    }
    
    //console.log(isPalindrome("abcd"));
    //console.log(isPalindrome("radar"));
    //console.log(isPalindrome("A man a plan a canal Panama"));
    
    var bContinue = true;
    do{
        //get a word from the user
        var userInput = prompt("Enter a word to test if it is a Palindrome: ");
        //test the word with out function
        var isPalin = isPalindrome(userInput);
        var message = "";
        //create a nessage based on results
        if (isPalin){
            message = userInput + " is a palindrome!";
        }
        else{
            message = userInput + " is not a palindrome!";
        }
        //show the message to the user
        alert(message);
        //ask the user if they want to test another word
        var answer = prompt("Do you want to continue? (y/n) ");
        //ends the loop if user answers n
        if (answer.toLowerCase() == "n"){
            bContinue = false;
        }
    }while(bContinue);