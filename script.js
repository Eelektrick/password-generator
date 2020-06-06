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
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var symbol = "!@#$%^&()?`,.':/+-*";
  var array = [lower, upper, number, symbol];

   //confirm password length
   var passLength = prompt("How long do you want your password to be? (can only use between 8 to 128 characters)");
   if(passLength > 7 && passLength < 129){
     alert("you chose a " + passLength + " character long password.") //validating the user choice
     console.log(passLength)
   }else{
     alert("Sorry the length has to be within 8 to 128 characters")
     return;
   }
 
   //confirm lower case letters and validating user choice
   var lowerCase = confirm("Do you want lower case letters in your password?")
   if(lowerCase === true){
     alert("You chose to include lower case letters in your password.")
     console.log(lowerCase)
   }else{
     alert("You chose not to include lower case letters in your password.")
     console.log(lowerCase)
   }
 
   //confirm upper case letters and validating user choice
   var upperCase = confirm("Do you want upper case letters in your password?")
   if(upperCase === true){
     alert("You chose to include upper case letters in your password.")
     console.log(upperCase)
   }else{
     alert("You chose not to include upper case letters in your password.")
     console.log(upperCase)
   }
 
   //confirm numeric characters and validating user choice
   var numeric = confirm("Do you want numeric characters in your password?")
   if(numeric === true){
     alert("You chose to include numeric characters in your password.")
     console.log(numeric)
   }else{
     alert("You chose not to include numeric characters in your password.")
     console.log(numeric)
   }
 
   //confirm special characters and validating user choice
   var symbols = confirm("Do you want special characters in your password?")
   if(symbols === true){
     alert("You chose to include special characters in your password.")
     console.log(symbols)
   }else{
     alert("You chose not to include special characters in your password.")
     console.log(symbols)
   }
 
  //  //for loop to create password and return to writePassword
  //  for(var i = 0; i<passLength; i++){
  //    //random choices for password from arrays
  //    var passCreated = 
  //  }
}