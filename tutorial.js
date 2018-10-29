
/*
// #############
// CONFIGURATION
// #############
*/

var TUTORIAL_REPOSITORY = 'http://localhost:5820/what2watch';


/*
//  ##########
//	SHOW QUERY
//  ##########
*/

$('#show_query').on('click', function(e){

	var query = $('#query').text()';
	var pre = $('<pre></pre>');
	pre.text(query);
	$('#linktarget_query').html(pre);

});

/*
//  ###########
//	SHOW OUTPUT
//  ###########
*/

$('#show_output').on('click', function(e){

	var query = $('#query').text()';
	var endpoint = TUTORIAL_REPOSITORY + '/query';
	var format = 'JSON';

	$.get('/sparql',data={'endpoint': endpoint, 'query': query, 'format': format}, function(json){
		var pre = $('<pre></pre>');
		pre.text(JSON.stringify(json));
		$('#linktarget_output').html(pre);
	});

});
