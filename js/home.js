$(document).ready(function() {

	$('#station-trades-header').click(function() {
		$('#station-trades-table').toggle();
	});

	$('#penury-trades-header').click(function() {
		$('#penury-trades-table').toggle();
	});

	$('#hub-trades-header').click(function() {
		$('#hub-trades-table').toggle();
	});

	$('#hub-buyer').change(function(){
		$('#hub-trades-table').children('tbody').children('tr').each(function(){
			var tr = $(this),
				hub = $('#hub-buyer').val();
			tr.toggle(hub === 'all' || tr.data('hub') === hub);
		});
	});

});