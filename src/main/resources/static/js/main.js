/* Botón Scroll To Top */
const btnSTT = document.querySelector('.ScrollToTop');
btnSTT.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});
/* Hace visible el bóton al iniciar el scroll descendente */
window.addEventListener('scroll', e => {
    btnSTT.style.display = window.scrollY > 50 ? 'block' : 'none';
});
  

/* Resalta en la navbar la sección en la que se encuentra */
$(document).ready(function () {
    $('.navbar').on('click', 'a', function () {
        $('.navbar a.active').removeClass('active');
        $(this).addClass('active');
    });
    $('body').scrollspy({ target: '.navbar' })
})

/* Obtiene el atributo src de la imagen seleccionada para pasarla al modal y mostrarlo */
document.addEventListener("click", function(e) {
    if (e.target.classList.contains('img-item')) {       
        const src = e.target.getAttribute('src');
        document.querySelector('.img-modal').src = src;        
        const myModal = new bootstrap.Modal(document.getElementById('imgPopUpModal'));        
        $("#imgPopUpModal p").text($(e.target).attr('alt')); /* Se pasa el valor de 'alt' de la imagen al elemento <p> */
        myModal.show();        
     }     
});

/* Hace zoom a la imagen de las cards del portafolio cada que se pone el cursor */
$(".img-item").hover(function() {
    $(this).closest(".img-item").css("z-index", 1);    
    $(this).animate({ height: "175", width: "225"}, "fast");
}, 
function() {
    $(this).closest(".img-item").css("z-index", 0);
    $(this).animate({ height: "150", width: "200" }, "fast");
});

