var express = require('express');
var  bodyParser = require('body-parser');
var fs = require('fs');

var app = express();
var stringfyFile = '';

app.use(bodyParser.json());

app.get('/getNote', function (req, res) {
	fs.readFile('./test.json', 'utf-8', function(err, data) {
		if (err) throw err;
		stringfyFile = data
		res.send(data);
	});
});

app.post('/updateNote/:note', function(req, res) {
	stringfyFile = req.params.note;
	fs.appendFile('./test.json', stringfyFile, function(err) {
		if (err) throw err;
		console.log('file updated');
		res.send(stringfyFile);
	});
});

app.listen(3000);