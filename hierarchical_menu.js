$(function(){
	
	$(".h-menu li").hover(
		function(){
			$(this).find("ul:first").slideDown(300);
			},
		function(){
			$(this).find("ul:first").slideUp(300);
			}
	);
		
});