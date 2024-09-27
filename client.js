//open a web socket from javascript

var ws = new WebSocket("ws://localhost:8895");

ws.onopen = function () {
  //Web Socket is connected, send datas to server
  ws.send("Message from HTML page script");
  console.log("Message sent to server");
};

ws.onmessage = function (evt) {
  //handle messages from server
  if (typeof evt.data === "string") {
    // Handle string message
    alert("Text message received: " + evt.data);
  } else if (evt.data instanceof Blob) {
    // Handle binary data as Blob
    alert("Binary Blob received.");
  } else if (evt.data instanceof ArrayBuffer) {
    // Handle binary data as ArrayBuffer
    alert("ArrayBuffer received.");
  }
};

ws.onclose = function () {
  //websocket closed
  console.log("Websocket Connection is closed...");
};
