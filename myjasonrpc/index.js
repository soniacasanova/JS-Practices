const net = require ("net");

const server = net.createServer();

server.on("connection", handleConnection);

server.listen(12345, "0.0.0.0", () => {
    const serverAddress = JSON.stringify(server.address());
    console.log(`server listening to ${serverAddress}`);
    });

function subtract(data) {
    const jsonRPCReq = JSON.parse(data);
    const result = jsonRPCReq.params.minuend-jsonRPCReq.params.subtrahend;
    const  jsonRPCResp =  {
        jsonrpc: "2.0",
        result: result,
        id: jsonRPCReq.id 
    }
    return JSON.stringify(jsonRPCReq);
}

    function handleConnection(socket) {
        const remoteAddress = `${socket.remoteAddress}:${socket.remotePort}`;
        console.log(`New client from ${remoteAddress}`);
        socket.setEncoding("utf8");
        socket.on("data", onConnData);
        socket.on("close", onConnClose);
        socket.on("error", onConnError);
        function onConnData(data) {
        socket.write(subtract(data));
        }
        function onConnClose() {
        console.log(`Closed connection from ${remoteAddress}`);
        }
        function onConnError(err) {
            console.log(`Error: ¢{err.message} in connection from ${remoteAddress}`);

        }
        }