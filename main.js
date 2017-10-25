$(document).ready(function() {
	setSize($("#text-box").val());

	document.getElementById("setSize").onclick = function() {
		var gridSize = $(this).closest('.page').find('#text-box').val();
		alert('Grid size set to a ' + gridSize + ' x ' + gridSize + ' square.');
		setSize(gridSize);
	};

	function setSize(gridSize) {
		$('#container').empty();
		for(let i = 0; i < gridSize**2; i++){
			$('#container').append('<div class="gridSquare"></div>');
		}
	  	$('.gridSquare').height(500/gridSize-2);
		$('.gridSquare').width(500/gridSize-2);
	}
	$('#container').on('mouseenter', '.gridSquare', function() {
		//$(this).addClass('highlight');
		$(this).animate({'opacity': '0'});
	});
	
});