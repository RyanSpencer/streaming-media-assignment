const http = require('http');
const htmlHandler = require('./htmlRepsonses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const oneRequest = (request, response) => {
  console.log(request.url);
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);
