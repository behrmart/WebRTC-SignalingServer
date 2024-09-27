//open a web socket from javascript

var ws = new WebSocket("ws://localhost:8895");

ws.onopen = function () {
  //Web Socket is connected, send datas to server
  ws.send("Message from HTML page script");
  console.log("Message sent to server");
};

ws.onmessage = function (evt) {
  //handle messages from server
  var received_msg = evt.data;
  alert("Message from server = " + received_msg);
};

ws.onclose = function () {
  //websocket closed
  console.log("Websocket Connection is closed...");
};
