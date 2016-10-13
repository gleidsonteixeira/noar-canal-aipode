$(document).ready(function(){
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	aMenu();
})

$(window).resize(function(){})

function aMenu(){
	$("#aMenu li").click(function(){
		$("#aMenu li").removeClass("active");
		$(this).addClass("active");
	})
}
