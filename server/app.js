const app = require("express")();
const http = require("http").Server(app);
const cors = require("cors");
const _ = require("lodash");
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello");
});

let current = 1;

// 0: empty
// 1: blue
// 2: red
const grid = _.times(25).map(() => _.times(25).map(() => 0));

//Whenever someone connects this gets executed
io.on("connection", function (socket) {
  console.log("A user connected");
  io.emit("update", grid);

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });

  socket.on("place", function (obj) {
    console.log("A user placed at", obj.i, obj.j, current);
    const { i, j } = obj;
    grid[i][j] = current;
    current = 3 - current;

    io.emit("update", grid);
  });
});

http.listen(4000, function () {
  console.log("listening on *:4000");
});
