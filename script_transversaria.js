$(document).ready(function() {

	$(".popup-me_3").click(function(){

		pop_init_3( "Due aste trasversali dette transversaria, posizionate in obliquo a incastro tra la regula e le ancones, avevano la funzione di migliorare la stabilità dello strumento evitando che la riga flettesse troppo." );

	});

});

function pop_init_3( my_content ) {

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