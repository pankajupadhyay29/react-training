const http = require("http");
const url = require("url");
const { bugs } = require("./bugs");

var server = http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
	//create web server
	if (req.url === "/bugs") {
		const method = bugs[req.method.toLowerCase()];
		const queryObject = url.parse(req.url, true).query;
		const result = method ? method.call(bugs, [queryObject]) : null;
		if (result) {
			res.writeHead(200, { "Content-Type": "application/json" });
            // res.write(result);
			res.end(result);
		}
	} else if (req.url.match(/[bugs]*\?./)) {
		const path = url.parse(req.url, true);
        const queryObject = path.query;
        const method = bugs[path.pathname.replace(/\//g, '').replace(/\\/g, '')];
		const result = method ? method.call(bugs, queryObject) : null;
		if (result) {
			res.writeHead(200, { "Content-Type": "application/json" });
			// res.write(result);
			res.end(result);
		}
	} else if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(`Server time is ${new Date()}`);
	}

	res.end("Invalid Request!");
});

server.listen(5000); //6 - listen for any incoming requests

console.log("Node.js web server at port 5000 is running..");
