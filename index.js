const http = require("http");
const WebSocketServer = require("websocket").server
let connection = null;

const httpserver = http.createServer((req, res) => {
    console.log("we have received a requests");
})


const websocket = new WebSocketServer({
    "httpServer": httpserver
})

websocket.on("request", request => {

    connection = request.accept(null, request.origin)
    connection.on("onopen", () => console.log("OPENED"));
    connection.on("onclose", () => console.log("CLOSED"))
    connection.on("onmessage", message =>{ 
        console.log(`Received message ${message}`)
    })


})

httpserver.listen(8080, () => console.log("My server is listening on 8080"));