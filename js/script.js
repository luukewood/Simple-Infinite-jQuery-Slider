$(function(){

	var slider = $('.slides'),
		sliderItems = slider.children();
		sliderItemsLength = sliderItems.length;
		sliderItemWidth = sliderItems.first().outerWidth(true);
		sliderWidth = sliderItemsLength * sliderItemWidth + "px",
		buttons = $('button');
	var	firstItem;
	var	lastItem;
	var	current;
		lastItem = slider.find('li:last');
		lastItem.prependTo(slider);	
		slider.css({
			width: sliderWidth,
			left: -100 + "%"
		});

	var interval = setInterval(nextSlide, 6000);

	function backToStart() {

		firstItem = slider.find('li:first');
		lastItem = slider.find('li:last');

		if(current == 1) {
			lastItem.after(firstItem);
		} else {
			firstItem.before(lastItem);
		};

		slider.css({
			left: -100 + "%"
		});
	};

	function animation(indicator) {
		slider.animate({
			left: "+=" + ( -100 * indicator ) + "%"
		}, 2000, backToStart);
	};

	function prevSlide() {
		current = -1;
		animation(current);
	};

	function nextSlide() {
		current = 1;
		animation(current);
	};

	buttons.on('click', function(e){
		clearInterval(interval);
		e.currentTarget.classList.contains('next') ? nextSlide() : prevSlide();
	});
});









