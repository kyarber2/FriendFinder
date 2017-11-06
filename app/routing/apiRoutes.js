//route to POST "/api/friends" that handles all incoming survey results and compatability logic
var express = require('express'),
    fs = require('fs')
    url = require('url');
var app = express();
var friendData = require('../data/friends.js')


app.use('/data', express.static(__dirname + '/data'));  
app.use(express.static(__dirname + '/data')); 

app.post('/api/friends', function(request, respond) {
	friendData.push(req.body);
	res.json();
    // var body = '';
    // filePath = __dirname + '/data/friends.js';
    // request.on('data', function(data) {
    //     body += data;
    // });

    // request.on('end', function (){
    //     fs.appendFile(filePath, body, function() {
    //         respond.end();
    //     });
    // });
});

app.listen(3000);





//A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
//put name of array into the res.json()
app.get("/api/friends", function(req, res) {
    res.json("/friends.js");
  });