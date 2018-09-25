$(document).ready(function(){
	$('input').on('keyup', function(e){
		if(e.which == 13)
		{
			e.preventDefault();
        // Get all focusable elements on the page
        var $canfocus = $('input:enabled');
        var index = $canfocus.index(document.activeElement) + 1;
        if (index >= $canfocus.length) index = 0;
        $canfocus.eq(index).focus();
		}
	});

});