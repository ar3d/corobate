$(document).ready(function() {

	$(".popup-me_1").click(function(){

		pop_init_1( "La regula, lunga 20 piedi pari a 5,91 m, era l'elemento principale attraverso cui veniva effettuato il livellamento, in quanto permetteva all'agrimensore di definire con precisione il piano orizzontale." );

	});

});

function pop_init_1( my_content ) {

	var pop_height = 'auto';
        var pop_html = '<div class="pop-bg"></div><div class="pop-wrap"><p class="pop-x">X</p><div class="pop-content"></div></div>';

	$("model-viewer").prepend( pop_html );

	$(".pop-wrap").animate({ "height" : pop_height }, 250).click(function(event){
		event.stopPropagation();
	});

	$(".pop-bg, .pop-x").bind("click", function(event) {
		pop_close();
	});

	$(".pop-content").text(my_content);

}

function pop_close() {
	$(".pop-bg, .pop-wrap").remove();
	$("model-viewer").unbind("click");
}