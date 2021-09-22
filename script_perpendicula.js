$(document).ready(function() {

	$(".popup-me_4").click(function(){

		pop_init_4( "L'allineamento orizzontale avveniva attraverso quattro fili a piombo, i perpendicula, posizionati ai lati della regula. Il livellamento veniva eseguito allineando i fili con delle tacche di allineamento presenti sulle traverse." );

	});

});

function pop_init_4( my_content ) {

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