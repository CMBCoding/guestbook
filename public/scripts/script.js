document.getElementById("guestbook-form").onsubmit = () => {

//Set flag for validation
isValid = true;

//Import email for email validation from [https://ihateregex.io]
const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;


//Clear out any error messages for valid fields
clearErrors();

//Get the form elements
let fname = document.getElementById("fname").value.trim();
let lname = document.getElementById("lname").value.trim();
let number = document.getElementById("number").value;
let email = document.getElementById("email").value;
let checkinDate = document.getElementById("checkinDate").value;
let checkOutDate = document.getElementById("checkOutDate").value;
let comments = document.getElementById("comments").value.trim();

//Validate the fields
if (fname === '') {
    isValid = false;
    document.getElementById("error-msg-fname").style.display = "block";
}

if (lname === '') {
    isValid = false;
    document.getElementById("error-msg-lname").style.display = "block";
}

if (email === '' && (!emailRegex.test(email))) {
    isValid = false;
    document.getElementById("error-msg-email").style.display = "block";
}

if (number === '') {
    isValid = false;
    document.getElementById("error-msg-number").style.display = "block";
}

if ((checkinDate === '') || (checkOutDate === '')) {
    isValid = false;
    document.getElementById("error-msg-date").style.display = "block";
}

return isValid;

}

//Clear function called to reset error field elements.
function clearErrors() {
    //Grab all the error spans
    let errors = document.getElementsByClassName("error-msg");

    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = "none";
    }
}