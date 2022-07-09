/* Botón Scroll To Top */
const btnSTT = document.querySelector('.ScrollToTop');
btnSTT.addEventListener('click', function() {
    window.scrollTo({
        top: 0, left: 0,
        behavior: "smooth"
    });
});
/* Hace visible el bóton al iniciar el scroll */
window.addEventListener('scroll', e => {
    btnSTT.style.display = window.scrollY > 150 ? 'block' : 'none';    
}); 

/* Para dar el efecto 'sticky' a la navbar al pasar por el elemento oculto span con clase .trigger */
(new IntersectionObserver(function(e,o){
    if (e[0].intersectionRatio > 0){
        document.documentElement.removeAttribute('class');
    } else {
        document.documentElement.setAttribute('class','stuck');
    };
})).observe(document.querySelector('.trigger'));

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
        $("#imgPopUpModal h6").text($(e.target).attr('data-title')); /* Se pasa el valor de 'title' de la imagen al elemento <h6> */
        myModal.show();
     }     
});

/* Hace zoom a la imagen de las cards del portafolio cada que se pone el cursor */
$(".img-item").hover(function() {
    $(this).closest(".img-item").css("z-index", 1);    
    $(this).animate({ height: "210", width: "310"}, "fast");
}, 
function() {
    $(this).closest(".img-item").css("z-index", 0);
    $(this).animate({ height: "200", width: "300" }, "fast");
});

/* Función que obtiene los datos del formulario para enviar el correo electrónico */
const $form = document.querySelector('#c-form');
const btnEmailTo = document.querySelector('#myEmail');

$form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)

    const btnSendEmail = $('#btnSendEmail')
    const btnHtmlElements = btnSendEmail.html() // Almacena las caracteristicas del botón    
    $(btnSendEmail).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>&nbsp; Procesando...').prop('disabled', true)
    
    /* Función que agrega un spinner antes de completar el envío del formulario */
    setTimeout(function () {
        $(btnSendEmail).html(btnHtmlElements).prop('disabled', false) // Regresa el btn a como estaba originalmente
        btnEmailTo.setAttribute('href', `mailto:mauba22@outlook.com?subject=Quiero contactar: ${form.get('name')} - ${form.get('email')}&body=${form.get('message')}`)
        btnEmailTo.click();
    }, 
    4000) // 4 segundos
}

/* Footer con efecto 'Parallax' */
$(document).ready(function() {
  siteFooter();	
	$(window).resize(function() {
		siteFooter();
	});	
	function siteFooter() {
		var siteContent = $('.main');
		var siteFooter = $('#footer');
		var siteFooterHeight = siteFooter.height();

		siteContent.css({
			"margin-bottom" : siteFooterHeight + 50
		});
	};
});

function modalSpinner() {
    $('.modalSpinner').modal('show');
    setTimeout(function () {        
        $('.modalSpinner').modal('hide');
    }, 3000);
 }

function switchLang(lang) {
    $("[data-" + lang + "]").text(function(i, e) {
        return $(this).data(lang);
    });
}
switchLang("es");

$(".switchlang").click(function() {
    modalSpinner();  
    switchLang($(this).data("lang"))
});

