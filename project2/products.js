var cheerio = require('cheerio');
var request = require('request');

var url = 'http://www.producthunt.com/';

request(url, function(error, response, body) {
	if (error) console.log(error);

	$ = cheerio.load(body);
	$('.post').each(function() {
		var title = ($(this).find('.title').text());
		//console.log(title);
		//this parseInt function only works for numbers, duh!
		title = parseInt(title.substring());
		console.log(title);
		//console.log($(this).find('.result-title')(href));
		//var year = $(this).find('.year').text();
		//var title = $(this).find('.url').text();
		//var description = $(this).find('.post-tagline').text();
/*
		var ideas = {
			"title": title,
			"description": description
		};
		console.log(ideas);
*/
	});
});