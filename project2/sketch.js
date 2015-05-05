
var l = {
  title: title;
  description: description;
}

db.add(l);



$(document).ready(function() {
    //var button = $("#image").find("img");
    var target1 = $('#title');
    var target2 = $('#description');
        $("#image").click(function() {
        	console.log("I clicked!");
           	target1.empty();
           	target1.append("<p>Test</p>");
           	console.log("new title");
           	target2.empty();
           	target2.append("<p>Test Description</p>");
           	console.log("new description");
           	$(function() { newIdea(); });
    	});


});

/*
function newIdea() {
	console.log("JSON call!");
	//var dullIdeas = "productIdeas.json";
    $.getJSON("products.js", function(data) {
    	console.log("I have the JSON");
    	console.log(JSON.stringify("products.js"));
    	//for (var i = 0; i < data.length; i++) {
    	//	console.log(data[i]);
    	//};
    	//console.log("I got the json!");
    	//var ideas = [];
    	//var enter = data[Math.floor(Math.random()*data.length)];
    	//console.log(data);
  	});
};
*/

//see scraping module 6
function showIdeas(request) {
  //request.params is default, what you're searching for is unique
  var title = request.params.title;
  db.getAll(function(data) {

    var listings = [];
    for (var i = 0; i<data.length; i++) {


    }
  }) ;

};





