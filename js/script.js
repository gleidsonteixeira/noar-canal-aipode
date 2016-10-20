$(document).ready(function(){
	$(".button-collapse").sideNav({
		closeOnClick: true
	});
	aMenu();
	pBanner();
})

$(window).resize(function(){})

function aMenu(){
	$("#aMenu li").click(function(){
		$("#aMenu li").removeClass("active");
		$(this).addClass("active");
	})
}
function pBanner(){
	var a = $(window).width();

	if(a > 1024){
		$(".pBanner").jCarouselLite({
			btnNext: ".pBanner .next",
			btnPrev: ".pBanner .prev",
			speed: 500,
			visible: 2,
			start: 0.58
		});
	}else{
		$(".pBanner").jCarouselLite({
			btnNext: ".pBanner .next",
			btnPrev: ".pBanner .prev",
			speed: 500,
			visible: 1,
		});
	}
}
