/* Basic WebRTC Signaling Server Test 
by Bernardo Felipe Martinez Meave
*/

var WebSocketServer = require("ws").Server;
var ws = new WebSocketServer({ port: 8895 });

ws.on("listening", function () {
  console.log("Signaling Server started with port 8895");
});

ws.on("connection", function (connection) {
  console.log("User is connected");
  connection.send("Hello from Signaling Server");

  /*Action to do when user send messages */
  connection.on("message", function (message) {
    if (typeof message === "string") {
      // Message is plain text
      console.log("Text message from user: ", message);
    } else if (message instanceof Buffer) {
      // Message is binary data (Buffer)
      console.log("Binary message received: ", message);
    }
  });

  /*Action to do when user try to close the connection */
  connection.on("close", function () {
    console.log("Dissconnecting user");
  });
});
