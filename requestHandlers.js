var exec = require("child_process").exec;

function start(res) {
	console.log("Request handler 'start' was called.");

	var body = '<html>' +
		'<head>' +
		'<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />' +
		'</head>' +
		'<body>' +
		'<form action="/upload" method="post">' +
		'<textarea name="text" rows="20" cols="60"></textarea>' +
		'<input type="submit" value="Submit Text" />' +
		'</form>' +
		'</body>' +
		'</html>';

	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.write(body);
	res.end();
}

function upload(res) {
	console.log("Request handler 'upload' was called.");
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.write("Hello upload");
	res.end();
}

exports.start = start;
exports.upload = upload;