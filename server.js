var http = require('http')
var dt = require('./myfirstmodule')

var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hi, Selamat datang di node<b>JS</b>, hari ini tepat '+ dt.myDateTime())
    res.end();
});
server.listen(8080);
console.log('server running pn http://localhost:8080');