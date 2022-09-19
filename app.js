import * as dotenv from 'dotenv';
dotenv.config()

import * as http from "http";
import { Server, Socket } from "socket.io";

const server = http.createServer();
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});


io.on("connection", (socket) => {
    console.log('Connection');

    io.emit('successConnect', {content: 'success'});

    socket.on('readyGame', () => {
        console.log('some');
        io.emit('startGame', {content: 'startGame'});
    })
})

server.listen(3000);