(function($) {
	$.fn.carouselPlugin = function(){
		
		var leftUIEl = $('.carouselPlagin-prev');
		var rightUIEl = $('.carouselPlagin-next');
		var elementList = $('.carouselPlagin-list');

		var pixelsOffset = 220;
		var currentLeftValue = 0;
		var elementCount = elementList.find('.carouselPlagin-elem').length;
		var minimumOffset = - ((elementCount - 3) * pixelsOffset);
		var maximumOffset = 0;
	 
		leftUIEl.click(function() {
			if (currentLeftValue != maximumOffset) {
				currentLeftValue += pixelsOffset;
			elementList.animate({ left : currentLeftValue + "px"}, 500);
			}   
		});
	 
		rightUIEl.click(function() {
			if (currentLeftValue != minimumOffset) {
				currentLeftValue -= pixelsOffset;
			elementList.animate({ left : currentLeftValue + "px"}, 500);
			}
		});
		
		return this;
	};
})(jQuery);