import * as dotenv from 'dotenv';
dotenv.config()

import * as http from "http";
import { Server } from "socket.io";
import { setRandomInterval, getRandomNumber } from "./utils/index.js";

const server = http.createServer();
const io = new Server(server, {
    cors: {
        origin: '*',
    },
});


io.on("connection", (socket) => {
    let intervalId;

    socket.on('readyGame', () => {
        intervalId = setRandomInterval(() => {
            socket.emit('startGame', {coordinates: {
                    x: getRandomNumber(-90, -200),
                    y: getRandomNumber(300, 1000)
                }});
        }, 8000, 17000)
    })

    socket.on('gameFinish', () => {
        if (intervalId) {
            intervalId.clear()
        }
    })
})

server.listen(3000);