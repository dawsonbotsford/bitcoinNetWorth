var express = require('express');
var app = express();
var restler = require('restler');

app.set('port', (process.env.PORT || 5000))

app.use(express.static(__dirname + '/'))

app.use(bodyParser.json())

app.get('/keys', function(request, response) {
	response.send(bitcoin.generateKeys());
});

app.post('/split', function(request, response) {
    response.send(response.send(coreJs.calculate(request.body)));
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
