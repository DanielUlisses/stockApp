var http = require('http'); // 3. HTTP server

  /**
   * Get port from environment and store in Express.
   */
  var port = process.env.PORT; // 2. Using process.env.PORT
  app.set('port', port);

  /**
   * Create HTTP server.
   */

  http.createServer((req, res) =>{
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end('Hello-World\n')
}).listen(port)

  