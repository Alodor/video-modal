$(document).ready(() => {
                $('#mostrar').click(function() {
                    $('.modal').fadeIn()
                })   
                				
                $('.overlay').click(function() {
					var video = $('#video').attr('src')                    
					$('.modal').fadeOut()
					
					$('#video').attr('src', '')
    				$('#video').attr('src', video)
                })  
            })