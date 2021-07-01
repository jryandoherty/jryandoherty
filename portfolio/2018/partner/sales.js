$(document).ready(function(){


$('a[href^="#"]').click(function(){
				var that = this;
				$('html, body').animate({
								scrollTop: $( $(that).attr('href') ).offset().top
				}, 1200);
				return false;
});

$("#searchGlass").click(function() {
     var _this = $(this);
     var current = _this.attr("src");
     var swap = _this.attr("data-swap");
   _this.attr('src', swap).attr("data-swap",current);
});




$("#toggle").click(function() {
	$("#panel").slideToggle("slow");
});

$("#toggle2").click(function() {
	$("#panel2").slideToggle("slow");
});

$("#toggle3").click(function() {
	$("#panel3").slideToggle("slow");
});

});
