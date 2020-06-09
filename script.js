// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  //variables for each array used
  var lowerAnswer = "abcdefghijklmnopqrstuvwxyz";
  var upperAnswer = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberAnswer = "0123456789";
  var symbolAnswer = "!@#$%^&()[|]~?`,.':/+-*";
  var passCreate = "";
  var passFinal = "";

  //confirm password length and validating the user choice
  var passLength = prompt("How long do you want your password to be? (can only use between 8 to 128 characters)");
  if(passLength > 7 && passLength < 129){
    alert("you chose a " + passLength + " character long password.")
    console.log(passLength)
  }
  else{
    alert("Sorry the length has to be within 8 to 128 characters")
    return;
  }
 
  //confirm lower case letters and validating user choice
  var lowerCase = confirm("Do you want lower case letters in your password?")
  if(lowerCase){
    passCreate += lowerAnswer;
    alert("You chose to include lower case letters in your password.")
    console.log(passCreate)
  }
  else{
    alert("You chose not to include lower case letters in your password.")
  }

  //confirm upper case letters and validating user choice
  var upperCase = confirm("Do you want upper case letters in your password?")
  if(upperCase){
    passCreate += upperAnswer;
    alert("You chose to include upper case letters in your password.")
    console.log(passCreate)
  }
  else{
    alert("You chose not to include upper case letters in your password.")
  }
 
  //confirm numeric characters and validating user choice
  var numeric = confirm("Do you want numeric characters in your password?")
  if(numeric){
    passCreate += numberAnswer;
    alert("You chose to include numeric characters in your password.")
    console.log(passCreate)
  }
  else{
    alert("You chose not to include numeric characters in your password.")
  }
 
  //confirm special characters and validating user choice
  var symbols = confirm("Do you want special characters in your password?")
  if(symbols){
    passCreate += symbolAnswer;
    alert("You chose to include special characters in your password.")
    console.log(passCreate)
  }
  else{
    alert("You chose not to include special characters in your password.")
  }

  //If no criteria is chosen by the user
  if(!upperCase && !lowerCase && !numeric && !symbols){
    alert("You did not choose any criteria, Please try again.")
  }
  else{
    //for loop to create password and return to writePassword
    for(var i = 1; i<=passLength; i++){
      //random choices for password from arrays
      passFinal = passCreate.charAt(Math.floor(Math.random() * passCreate.length));
      console.log(passFinal)
      return passFinal;
    }
  }
}