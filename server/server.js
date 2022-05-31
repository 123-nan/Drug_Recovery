
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { readdirSync } from 'fs'; // from nodejs or destruct readdirSync
import { timeLog } from 'console';

require("dotenv").config();
const morgan = require("morgan");
const { Server } = require("socket.io");
const http = require("http");


const app = express();
app.use(morgan("dev")); // use morgan in dev get req post to show terminal
app.use(cors());
app.use(express.json()); // to get data as json

const server = http.createServer(app);

// route middleware
readdirSync('./routes').map((r) => app.use("/api", require(`./routes/${r}`)));

mongoose
    .connect(process.env.DATABASE, {})
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("DB Error => ", err));

const port = process.env.PORT || 4000;

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    },
});

io.on("connection", (socket) => {
    

    socket.on("join_room", (data) => {
        socket.join(data)
        console.log("USER WITH ID", data);
        socket.to(data).emit("connected", data);
    })
    socket.on("send_message", (data) => {
        console.log(data);
        socket.to(data.room).emit("receive_message", data);
    })

    socket.on("disconnect", () => {
        console.log("User Disconnected");
    })

    socket.on("userconnect", (data) => {
        console.log("userconnect", data.displayName, data.meeting_id);

        socket.join(data.meeting_id)
        console.log("USER WITH NAME", data.displayName);
        socket.to(data.meeting_id).emit("inform", data);
    })




    
})




server.listen(port, () => {
    console.log(`Server is runnning on ${port}`);
});