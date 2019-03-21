var http = require('http');

var fs = require('fs');

var server = http.createServer(function (request, response) {

	console.log('client request URL: ', request.url);

	if(request.url === '/cars') {
		fs.readFile('./views/cars.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if(request.url === '/cats') {
		fs.readFile('./views/cats.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	} else if(request.url === '/cars/new') {
		fs.readFile('./views/newcar.html', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/html'});
			response.write(contents);
			response.end();
		})
	}else if(request.url === '/images/car1.jpeg') {
		fs.readFile('./images/car1.jpeg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		})
	}else if(request.url === '/images/car2.jpg') {
		fs.readFile('./images/car2.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		})
	}else if(request.url === '/images/car3.jpg') {
		fs.readFile('./images/car3.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		})
	}else if(request.url === '/images/cat1.jpg') {
		fs.readFile('./images/cat1.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		})
	}else if(request.url === '/images/cat2.jpeg') {
		fs.readFile('./images/cat2.jpeg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		})
	}else if(request.url === '/images/cat3.jpeg') {
		fs.readFile('./images/cat3.jpeg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		})
	}else if(request.url === '/images/cat4.jpg') {
		fs.readFile('./images/cat4.jpg', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'image/jpeg'});
			response.write(contents);
			response.end();
		})
	} else if(request.url === '/stylesheets/main.css') {
		fs.readFile('./stylesheets/main.css', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		})
	} else if(request.url === '/stylesheets/form.css') {
		fs.readFile('./stylesheets/form.css', 'utf8', function(errors, contents) {
			response.writeHead(200, {'Content-Type': 'text/css'});
			response.write(contents);
			response.end();
		})
	} else {
		response.writeHead(404);
		response.end('File not found!!');
	}
})

server.listen(7077);

console.log("Running in localhost at port 7077")