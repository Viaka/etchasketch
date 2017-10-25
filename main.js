$(document).ready(function() {
	alert($("#text-box").val());


	document.getElementById("setSize").onclick = function() {
		setSize($(this).closest('.page').find('#text-box').val());
	};

	function setSize(gridSize) {
	  alert(gridSize);
	  for(let i = 0; i < gridSize**2; i++){
		$('#container').append('<div class="gridSquare"></div>');
		
	  }
	  $('.gridSquare').height(500/gridSize-2);
	  $('.gridSquare').width(500/gridSize-2);
	}
});