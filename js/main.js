


$(document).ready(function(){


	//slider
	
	$(".ust ul").width(($(".ust ul li").length * 24) - 10);
	
	$(".ust ul li").click(function(){
	
		$(".ust ul li").removeClass("active");
		
		$(this).addClass("active");
		
		
		$(".galeri .galeri-item").removeClass("active");
		$(".galeri .galeri-item").eq($(this).index()).addClass("active");
		
		
	});
	 
	$('.chart').easyPieChart({
        animate: 500,
		barColor: "#69c141",
		trackColor: "#dae4f7",
		scaleColor: false,
		lineCap: "square",
		lineWidth : 16,
		size:185
		
    });
     
});

