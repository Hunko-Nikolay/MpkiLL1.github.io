jQuery(document).ready(function($){
	$('.grid').masonry({
		itemSelector: '.grid-item',
    	percentPosition: true,
    	columnWidth: '.grid-sizer'
	});
});