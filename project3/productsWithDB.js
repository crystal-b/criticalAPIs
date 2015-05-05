var cheerio = require('cheerio');
var request = require('request');

var servi = require("servi");
var app = new servi(true);

//defaults to 3000 if I don't include this to set the port
port(3001);

//set up a database
//looks for a file called "dullIdeas.db" or creates one if it doesn't exist
var db = useDatabase("dullIdeas");

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
		var dullIdeas = {
			title: title,
			descrip: descrip
		};
		//console.log(ideas);
		db.add(dullIdeas);
		console.log(dullIdeas);
	});
});

//set up routes
route('/all', showAll);
route('/max/:num', showIdeas);
serveFiles('public');

//show all
function showAll(request) {
	db.getAll(function(data) {
		request.header("application/json");
		request.respond(JSON.stringify(data));
	});
}

//show ideas
function showIdeas(request) {
	var num = request.params.num;

	db.getAll(function(data) {
		var dullIdeas = [];
		listings.push(data[i]);
		request.header("application/json");
		request.respond(JSON.stringify(dullIdeas));
	});
}

start();
