var cheerio = require('cheerio');
var request = require('request');

var url = 'http://www.producthunt.com/';

request(url, function(error, response, body) {
	if (error) console.log(error);

	$ = cheerio.load(body);
	$('.post').each(function() {
		var title = ($(this).find('.title').text());
		var descrip = ($(this).find('.description').text());
		//console.log($(this).find('.result-title')(href));
		//var year = $(this).find('.year').text();
		//var title = $(this).find('.url').text();
		//var description = $(this).find('.post-tagline').text();

		//this creates an object for each idea (title, description pair)
		var ideas = {
			title: title,
			descrip: descrip
		};
		console.log(ideas);
	});
});
