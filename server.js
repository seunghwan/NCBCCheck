var http = require('http');
var url = require('url');

var port = process.env.PORT || 1337;

function start(route, handle) {
	http.createServer(function(req, res) {
		var pathname = url.parse(req.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle, pathname, res);
	}).listen(port);
}
exports.start = start;