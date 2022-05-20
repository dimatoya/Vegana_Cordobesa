
// activación navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}


// Oculto nav 
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
 

// Campos invalidados
(function () {
    'use strict'
  
    // DOM Formulario
    var forms = document.querySelectorAll('.needs-validation')
  
    // Bucle Formulario
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            alert('Gracias!! A la brevedad nos pondremos en contacto 😃')
          }
            form.classList.add('was-validated')
        }, false)
      })
  })()