var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response){
	console.log('client request URL: ', request.url);

	if(request.url === '/') {
		fs.readFile('index.html', 'utf8', function(errors, contents){
			response.writeHead(200, {'Content-Type': 'text/html'});
			console.log("errors", errors);
			response.write(contents);
			response.end();
		});
	} else {
		resonse.writeHead(404);
		response.end('File not found!!');
	}
});

server.listen(6789);

console.log("Running in localhost at part 6789")

