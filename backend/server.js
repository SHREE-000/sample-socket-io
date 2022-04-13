const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
})

io.on("connection", (socket)=> {
    console.log("what is socket io", socket);
    console.log("reached");

    socket.on("chat", (payload)=> {
        console.log("what is payload", payload);
        io.emit("chat", payload)
    })

})



// app.listen(5000, ()=> {
//     console.log("server is connected");
// })

server.listen(5000, ()=> {
console.log("server listening on port number 5000...");
})