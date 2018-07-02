$(document).ready(() => {
    // Mostrar modal
    $('#mostrar').click(function() {
        $('.modal').fadeIn()
    })   

    // Ocultar modal
    $('.overlay').click(function() {
        var video = $('#video').attr('src')                    
        $('.modal').fadeOut()
        
        // Resetear modulo del video
        $('#video').attr('src', '')
        $('#video').attr('src', video)
    })  
})