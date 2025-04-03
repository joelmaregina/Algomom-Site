//To obtain a NodeList of all of the images with the class "image" in the document:
let images = document.querySelectorAll('.image'); 

//Listen to the event of click on the images
images.forEach((image) => {
    image.addEventListener('click', (event) => {
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

//Muda o formulário para um formulário de inscrição com jQuery
let loginForm = document.getElementsByClassName("login-form");
let subscriptionForm = document.getElementsByClassName("subscription-form");

let changeToSubscription = document.getElementById("subscribe");
let changeToLogin = document.getElementById("return-login");

changeToSubscription.click(loadSubscription);

function loadSubscription(){
    loginForm.setAttribute("class", "hidden");
}


$("#inscricao").click(renderizaInscricao)

function renderizaInscricao(){
    $(".formulario-login").hide();
    $(".formulario-inscricao").fadeIn();
    $(".muda-para-inscricao").hide();
    $(".muda-para-login").fadeIn();
    $(".esqueceu-senha").hide();
    $("#tituloDaPagina").text("Inscrição");
    $(".chamadaFormulario").text("Inscreva-se com:");
    scrollPagina(); 
}

function scrollPagina(){
    var topoPagina = $("#tituloDaPagina").offset().top;
    $("html, body").animate(
        {
            scrollTop: topoPagina  + "px"
        }, 800)
}


//Retorna para a página de Login com jQuery
$("#voltar-para-login").click(voltaParaLogin)

function voltaParaLogin(){
    $(".formulario-inscricao").hide();
    $(".formulario-login").fadeIn();
    $(".muda-para-login").hide();
    $(".muda-para-inscricao").fadeIn();
    $(".esqueceu-senha").show();
    $("#tituloDaPagina").text("Login");
    $(".chamadaFormulario").text("Faça login na sua conta com:");
    scrollPagina();
}


