/**
 * hMenu - jQuery plugin for Horizontal Hierarchical Menu.
 * @version v1.0.0
 * @link https://github.com/yuliyabat/horizontal-hierarchical-menu
 * @license MIT
 */
(function($){

	"use strict";
	
	$.fn.hMenu = function (options) {
		var base = this,
		    settings = $.extend({
		    	slideSpeed : 300
		    }, options ); 
		$(base).find('li').hover(
			function(){
				$(this).find("ul:first").slideDown(settings.slideSpeed);
				},
			function(){
				$(this).find("ul:first").slideUp(settings.slideSpeed);
				}
		);
    }
		
}(jQuery));
