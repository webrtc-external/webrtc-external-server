
import { WebSocket, Server, RawData  } from "ws";
import { IncomingMessage, Server as HttpServer } from "http";


async function attachServer(httpServer: HttpServer) {
  const wss = new Server({
    noServer: true,
    path: "/ws",
  });

  httpServer.on("upgrade", (request, socket, head) => {
    wss.handleUpgrade(request, socket, head, (websocket:WebSocket) => {
        handleConn(websocket, request);
    });
  });

};


async function handleConn(socket: WebSocket, request: IncomingMessage ) {


    socket.on('message', async (data: RawData, isBinary: boolean) => {

    });

    socket.on('ping', async (data: Buffer) => {
        
    });

    socket.on('pong', async (data: Buffer) => {
        
    });
    
    socket.on('close', async (code: number, reason: Buffer) => {

    });
}


export default {
    attachServer
}
