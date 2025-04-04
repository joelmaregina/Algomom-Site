//To obtain a NodeList of all of the images with the class "image" in the document:
let images = document.querySelectorAll('.image'); 

//Listen to the event of double clicking on the images
images.forEach((image) => {
    image.addEventListener('dblclick', (event) => {
        if ( image.hasAttribute("id", "zoom")){
            //If the clicked image is already zoomed, it removes the zoom effect by removing the id zoom
            image.removeAttribute("id", "zoom");
            //Also remove the attribute scroll to the item clicked
            image.scrollIntoView(false);
        } else{
            //If the clicked image isn´t zoomed, it adds the zoom effect by applying the css ID zoom
            image.setAttribute("id", "zoom");
            //Also scroll the page until the item clicked is on view
            image.scrollIntoView(true);
        }

    });
});

// Variables used to change the Login Page:
let loginForm = document.getElementById("login-form"); // The login form
let subscriptionForm = document.getElementById("subscription-form"); //The subscription form

let changeToSubscription = document.getElementById("subscribe"); //The button to change to Subscrition
let changeToLogin = document.getElementById("return-login"); // The button to return to Login 

let forgotPassword = document.getElementById("forgot-password"); // The link to forgot Password

//To change the Login form to the Subscription form
changeToSubscription.addEventListener("click", (event) =>{
    //By clicking on "Subscribe" it will hide the Login form
    loginForm.style.display = "none";
    changeToSubscription.style.display = "none";
    forgotPassword.style.display = "none"; //Hide it since to subscribe the person doesn't have a password

    // And show the Subscription form
    subscriptionForm.style.display = "flex";
    changeToLogin.style.display = "flex";
    changeToLogin.style.alignItems = "center";
})

//To return from the  Subscription form to the Login form
changeToLogin.addEventListener("click", (event) =>{
    //By clicking on "Login" it will hide the Subscription form    
    subscriptionForm.style.display = "none";
    changeToLogin.style.display = "none";

    // And show the Login form again
    loginForm.style.display = "flex";
    changeToSubscription.style.display = "flex";
    changeToSubscription.style.alignItems = "center";
    forgotPassword.style.display = "flex";
})

//Gets the form of subscription
let subscriptionSend = document.getElementById("subscription-form");
// Gets the elements used to check the values of the passwords
var password = document.querySelector("#password1");
var passwordRepeat =  document.querySelector("#password-repeat");


//Trigged by the submit of the form
subscriptionSend.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevents the reload of the page
    //Checks if the passwords content are the same and show the proper message to each case (Yes or No)
    if(password.value != passwordRepeat.value){
        alert("The passwords don't match, please  it enter them again!");
        event.preventDefault();
    } else {
        alert("Subscription successfully done. Please confirm it on your email.")
    }
})




