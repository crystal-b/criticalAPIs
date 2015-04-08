// 1. Create an app to get credentials: https://foursquare.com/developers/apps
// 2. Endpoints: https://developer.foursquare.com/start

// http://whatsmylatlng.com/

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  noStroke();
  fill(0);
  //var url = "https://api.foursquare.com/v2/venues/search?client_id=0KU3GS0F2XSYDNGEVIXUCQ3HLQOVEA0QUFHOJ3TPNO15F5TD&client_secret=TAUOPANPQWVUZSYSNE2O5K33JBTXH2XFRLH1JOW4WTONLECJ&v=20130815&ll=40.7,-74&query=sushi";
  var url = "https://api.foursquare.com/v2/venues/search?client_id=0KU3GS0F2XSYDNGEVIXUCQ3HLQOVEA0QUFHOJ3TPNO15F5TD&client_secret=TAUOPANPQWVUZSYSNE2O5K33JBTXH2XFRLH1JOW4WTONLECJ&v=20130815&ll=26.6,-80.1&query=school";
  loadJSON(url, drawData);
}

function draw() {
}

function drawData(data) {
  var places = data.response.venues;
  console.log(places);
  for (var i=0; i<places.length; i++) {
    var x = map(places[i].location.distance, 0, 5000, 0, width);
    var y = map(places[i].stats.checkinsCount, 0, 5000, 0, height);
    console.log(places[i].stats);
    fill(100);
    ellipse(x, windowHeight/2, x/10, y/10);
    text(places[i].name, x, y);
  }
}


/*
function doSomething() {
  console.log("doing something!");
}

setTimeout(doSomething, 5000);
*/


/*var skools = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	noStroke();
	//fill(0);
	var url = "https://api.foursquare.com/v2/venues/search?client_id=0KU3GS0F2XSYDNGEVIXUCQ3HLQOVEA0QUFHOJ3TPNO15F5TD&client_secret=TAUOPANPQWVUZSYSNE2O5K33JBTXH2XFRLH1JOW4WTONLECJ&v=20130815&ll=26.6,-80.1&query=school";
	data = loadJSON(url, drawData);
	schools = loadJSON(url, draw);
}

function draw() {
	/*
	background(100);
	textSize(16);
	textStyle(NORMAL);
	console.log("background");
	for(var i=0; i<place.length; i++) {
		console.log("amIdrawing?");
		console.log(place[i]);
	}
	*/
/*}


function drawData(data) {
	var places = data.response.venues;
	console.log(places);
	for(var i=0; i<places.length; i++) {
		var x = map(places[i].location.distance, 0, 5000, width);
		var y = map(places[i].stats.checkinsCount, 0, 5000, height);
		console.log(places[i].stats);
		text(places[i].name, x, y);
		console.log(places[i].name);
		//console.log(places[i].categories.name);
		ellipse(100+150*i, 100, 10,10);
		fill(255);
		console.log("drawing");
	}




	/*
	if(available<1) {
		fill(255,0,0);
	}
	else {
		fill(0,255,0);
	}
		rect(300, 200, 50, 50);
	*/
/*}

	/*
	function draw(schools) {
		var skools = schools.response.venues;
		console.log("drawing");
		for(var i=0; i<skools.length; i++) {
			var x = map(skools[i].location.distance, 0, 5000, width);
			var y = map(skools[i].stats.checkinsCount, 0, 5000, height);
			ellipse(x, height/2, y, y);
			fill(255);
		}
	}
	*/


/*
var bubbles = [];

function setup() {
  createCanvas(600, 400);
  noStroke();
  loadJSON('http://api.openweathermap.org/data/2.5/weather?q=NewYork,USA', drawWeather); 
}

function drawWeather(weather) {

  // Get the loaded JSON data
  console.log(weather); // inspect the weather JSON
  var humidity = weather.main.humidity; // get the main.humidity out of the loaded JSON
  console.log(humidity); // inspect the humidity in the console

  background(40, 90, 200);
  fill(0, 255, 255, humidity); // use the humidity value to set the alpha
  for (var i = 0; i < 50; i++) {
    ellipse(random(width), random(height), 30, 30);
  }
}
*/





