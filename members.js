const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/jason')
    res.write(JSON.stringify({
    'status': 'success /t',
    'message': 'response success',
    'description': 'group exercise#03',
    'date': '2022-02-15T07:51:09+08:00',
    'data': 'S21910051, 105021910005, Richard Sangari, 082394649029 '
    }));
    res.end();
}).listen(3000)