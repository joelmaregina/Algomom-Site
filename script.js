let images = document.querySelectorAll('.image');

images.forEach((image) => {
    image.addEventListener('click', (event) => {
        if ( image.hasAttribute("id", "zoom")){
            image.removeAttribute("id", "zoom");
        } else{
            image.setAttribute("id", "zoom");
        }

    });
});


