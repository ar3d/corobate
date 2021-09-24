$(document).ready(function() {

	$(".popup-me_2").click(function(){

		pop_init_2( "Le ancones erano le gambe verticali dello strumento e dovevano essere perfettamente ortogonali alla regula. La regolazione dell'altezza di questi appoggi doveva costituire l'operazione più difficoltosa per posizionare in orizzontale il corobate, in quanto doveva essere effettuata tramite l'inserimento di zeppe sotto al piede di una delle due gambe." );

	});

});

function pop_init_2( my_content ) {

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