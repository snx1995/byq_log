const rm = require("./model/read_md");
const http = require("http");
const URL = require("url");
const {dispatcher} = require('./controller/dispatcher');

const fs = require("fs");

http.createServer((request, response) => {
    // response.writeHead(200, { 'Content-Type': 'application/json;charset=UTF-8'});
    
    // rm.readMD("test.md", data => {
    //     response.end(data.toString());
    // })
    const url = URL.parse(request.url);

    dispatcher.dispatch(url.pathname, request, response);
    
}).listen(12345);

console.log("Server is running");

