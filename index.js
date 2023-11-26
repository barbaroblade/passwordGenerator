const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
//get references to HTML elements
let passLengthInput = document.getElementById("passwordLength");
let passOne = document.getElementById("pass-One");
let passTwo= document.getElementById("pass-Two");
let passBtn = document.getElementById("pass-btn");
let copybtn1 = document.getElementById("copy-btn1")
let copybtn2 = document.getElementById("copy-btn2")


// Add an event listener to the "generate passwords" button 
    passBtn.addEventListener("click",function generatePasswords(){
        //get the desired password length from the input or default to 15
        let passwordLength = parseInt(passLengthInput.value) || 15;
        //Initialize variables to store generated passwords 
        let password1 = "";
        let password2 = "";
        // generate passswords 
    for (let i=0; i< passwordLength; i++){
// generate a random index to pick a character from the array 
let randomIndex = Math.floor(Math.random()*characters.length);
password1 += characters[randomIndex];
randomIndex = Math.floor(Math.random()*characters.length);
password2 += characters[randomIndex];

    

    }
    // Set the generated passwords asd the values of the input fields
    passOne.value = password1;
    passTwo.value= password2;
    });
    // COPY function
    function copyToClipboard(elementId, message) {
        // Find the input element based on the provided elementId
        let element = document.getElementById(elementId);
        element.select();

            // Use the Clipboard API to copy the selected text
            document.execCommand("copy");
            alert(message);
       
    }
       
// The copyToClipboard function to the "Copy Password1" and "Copy Password2" buttons 
copybtn1.addEventListener("click", function copypassword1(){
    copyToClipboard("pass-One", "Password 1 copied to clipboard");
});

copybtn2.addEventListener("click", function copypassword2(){
    copyToClipboard("pass-Two","Password 2 copied to clipboard");
});

function showPassword() {
    let x = document.getElementById("pass-One");
    let y = document.getElementById("pass-Two")
    if (x.type === "password" && y.type ==="password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type="password";
    }
  }

