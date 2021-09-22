$(document).ready(function() {

	$(".popup-me_5").click(function(){

		pop_init_5( "Nel caso in cui il livellamento dello strumento non potesse essere eseguito con i fili a piombo a causa del vento, al centro della riga superiore era presente una vaschetta lunga 5 piedi, larga 1 dito e profonda 1 dito e mezzo (1,48 × 0,0185 × 0,0278 m) detta canalis, che aveva la funzione di livella ad acqua." );

	});

});

function pop_init_5( my_content ) {

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