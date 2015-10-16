function HeightBackground (){
	height = $(window).height();
	$("#cover").css({
		'height' : height
	})
}

function ShrinkNavbar(){
	$window = $(window);
	$window.scroll(function(){
		if($window.scrollTop() > 50){
			$("#anavbar").removeClass('full');
			$("#anavbar").addClass('shrink');
		}else{
			$("#anavbar").removeClass('shrink');
			$("#anavbar").addClass('full');
		}
	})
}

$(document).ready(function(){
	HeightBackground();
	$(window).resize(function(){
		HeightBackground();
	})
	$(window).scroll(function(){
		ShrinkNavbar();
	})
})
$(document).on('click','#anavbar-ico-resp',function(){
	$("#anavbar").toggleClass('responsive');
})