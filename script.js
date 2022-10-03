var generateBtn = document.querySelector("#generate"); //locate our button using the generate id

//this is our main function that will generate our password 
function generatePassword(){
  //initiate our variables and our arrays with our special characters
  var message = "";
  var passwordBuilder = "";
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var specialCharcters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "}", "|", "~"];
  var capAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  //boolean variables to check if the user wants this type of character or not. They all start as false.
  var ifLowerCase = false;
  var ifSpecialCharacters = false;
  var ifCapAlphabet = false;
  var ifNumbers = false

  //display a prompt so the user can enter how long they want their password. If the password is less than 8 characters or more than 128 we prompt the user to try again.
  var numOfCharacters = prompt("Enter a number between 8 and 128"); //prompt gets user input
  if (numOfCharacters < 8){
    alert("You entered " + numOfCharacters + "." + "\nToo few characters. Click Generate Password again.");
    return "Click Generate Password again";
  }
  if (numOfCharacters > 128){
    alert("You entered " + numOfCharacters + "." + "\nToo many characters. Click Generate Password again.");
    return "Click Generate Password again";
  }
  message = message.concat("Length: " + numOfCharacters) //confirms length

  //check what kind of characters the user wants. Displays a message at the end confirming selections.
  if(confirm("Do you want lowercase characters? Click CANCEL if you don't") == true){
    ifLowerCase = true;
    message = message.concat("\nYou want lower case letters.");
  }
  if (confirm("Do you want special characters? Click CANCEL if you don't.") == true){
    ifSpecialCharacters = true;
    message = message.concat("\nYou want special characters.");
  }
  if (confirm("Do you want capital letters? Click CANCEL if you don't.") == true){
    ifCapAlphabet = true;
    message = message.concat("\nYou want capital letters.");
  }
  if (confirm("Do you want numbers? Click CANCEL if you don't.") == true){
    ifNumbers = true;
    message = message.concat("\nYou want numbers.");
  }

  alert(message); //display a message with confirmation of length and character selection

 //for loop to generate our password. Based on how long the user wants the password
 for (var i = 0; i < numOfCharacters; i++){
    var typeOfCharacter = Math.floor(Math.random() * 4); //num bewteen 0 and 3 to randomize what type of character is added
    //if statement to check to see if at least on type of character was chosen. If not displays a message.
    if ((ifLowerCase == false) && (ifSpecialCharacters == false) && (ifCapAlphabet == false) && (ifNumbers == false)){
      alert("You must have at least one type of character. Click Generate Password again.");
      return "Click Generate Password again";
    }
    //switch statment takes our random number we created to randomly add a type of character. 0 is lower case letters. 1 is special characters. 2 is capital letters. 3 are numbers.
    switch (typeOfCharacter){
      case 0:
        if (ifLowerCase == true){ //checks to see if the user selected this type of character
          var alphabetIndex = Math.floor(Math.random() * alphabet.length); //gets a random character from the alphabet array
          var getText = alphabet[alphabetIndex]; //stores the random character in a variable
          passwordBuilder = passwordBuilder.concat(getText);//adds the character to our passwork
        }else if (ifLowerCase == false){ //if the user did not want this type of character nothing is added but we subtract 1 from our loop counter so we only count up when we add a character
          i--;
        }
          break; //breaks out of the switch and to the next iteration of our loop
      //the rest of the cases follow the same logic
      case 1:
        if (ifSpecialCharacters == true){
          var specialIndex = Math.floor(Math.random() * specialCharcters.length);
          var getText = specialCharcters[specialIndex];
          passwordBuilder = passwordBuilder.concat(getText);
        }else if (ifSpecialCharacters == false){
          i--;
        }
        break;
      case 2:
        if (ifCapAlphabet == true){
          var capIndex = Math.floor(Math.random() * capAlphabet.length);
          var getText = capAlphabet[capIndex];
          passwordBuilder = passwordBuilder.concat(getText);
        }else if (ifCapAlphabet == false){
          i--;
        }
        break;
      case 3:
        if (ifNumbers == true){
          var numIndex = Math.floor(Math.random() * numbers.length);
          var getText = numbers[numIndex];
          passwordBuilder = passwordBuilder.concat(getText);
        } else if (ifNumbers == false){
          i--;
        }
        break;
      
       
    }
    }
    return passwordBuilder; //return our password after our loop is finished
}




//this function gets our generated password and uses it as text
function writePassword(){
    var password = generatePassword(); //calls the generate password function and stores it in the password variable
    var passwordText = document.querySelector("#password"); //locate our text area based on the id of password

    passwordText.value = password; //populates our text area by storing what we have in password variable in our located passwordText variable
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //use eventListener function on our button, calls writePassword function on click