/* Basic WebRTC Signaling Server Test 
by Bernardo Felipe Martinez Meave
*/

var WebSocketSErver = require("ws").Server;
var ws = new WebSocketSErver({ port: 8895 });

ws.on("listening", function () {
  console.log("Signaling Server started with port 8895");
});

ws.on("Coonnection", function (connection) {
  console.log("User is connected");
  connection.send("Hello from Signaling Server");

  /*Action to do when user send messages */
  connection.on("message", function (message) {
    console.log("message from user");
  });

  /*Action to do when user try to close the connection */
  connection.on("close", function () {
    console.log("Dissconnecting user");
  });
});
