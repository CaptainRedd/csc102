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