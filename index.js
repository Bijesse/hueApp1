// Keep your npm modules and other file dependencies at the top
var express = require('express');

// Create a new express instance and point to it using the variable app
var app = express();

// Tells express where to find static assets (html, css, js); in this case - the "public" directory
app.use(express.static('public'));

// listens for HTTP requests to the root, "/", of our server
app.get('/', function (req, res) {
	// sends back the "index.html" file; Node is looking in the "public" directory for this
	res.send('index.html');
});

app.listen(1337, function () {
	console.log('go to http://localhost:1337');
});


console.log("hi");
