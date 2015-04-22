
function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	//foursquare api
	//v parameter means api version
	//ll parameter stands for lat and long
	var url='https://api.foursquare.com/v2/venues/search?client_id=0KU3GS0F2XSYDNGEVIXUCQ3HLQOVEA0QUFHOJ3TPNO15F5TD&client_secret=TAUOPANPQWVUZSYSNE2O5K33JBTXH2XFRLH1JOW4WTONLECJ&v=20130815&ll=40.7,-74&query=coffee';
	//call function to load JSON file
	//then call handleData function to check for erros
	//after data.json is loaded
	data = loadJSON('data.json', handleData);
}

//we're making a function that returns an argument
//but we don't ever call the function ourselves
//instead, a parameter calls the function
function handleData(data) {
	background(100);
	//check that JSON is loaded
	console.log(data);
	console.log(data.person1);

	var places = data.response.venues;
	for (var i = 0; i<places.length; i++) {
		var x = random(width);
		var y = random(height);
		text(places[i].name, x, y);
	}
}

function draw() {
	console.log(data);

	ellipse(width/4, height/2, 100, 100);
	text(data.person1.name, width/4, height/2);
	ellipse(3*width/4, height/2, 100, 100);
	text(data.person2.name, 3*width/4, height/2);
}

