$(document).on('click', '#station-trades-header', function() {
	$('#station-trades-table').toggle();
}).on('click', '#penury-trades-header', function() {
	$('#penury-trades-table').toggle();
}).on('click', '#hub-trades-header', function() {
	$('#hub-trades-table').toggle();
}).ready(function() {
	$('#hub-buyer').change(function() {
		var hub = $('#hub-buyer').val();
		$('#hub-trades-table').children('tbody').children('tr').each(function() {
			var tr = $(this);
			tr.toggle(hub === 'all' || tr.data('hub') === hub);
		});
	});
});