$('circle').on ("click",
	function() {	
		$('.description').html("<div class='close'>X</div>" + $(this).attr('description-data') + "<div class='coords'>" + $(this).attr('description-coords') + "</div>");
		$('.description').fadeIn();
	}
)

$('body').on ("click", 'div.close',
	function() {	
		$('.description').fadeOut();
	}
)