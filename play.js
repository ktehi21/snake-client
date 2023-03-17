const {connect} = require("./client");
console.log("connect");
const playConn = connect();

// setup interface to handle user input from stdin
const handleUserInput = (key) => { 
  console.log("key: ", key);
  if (key === '\u0003') {
    console.log("BYE");
    process.exit();
  }
  if (key === 'w') {
    playConn.write("Move: up");
    // console.log("w is up command");
  }
  if (key === 'd') {
    playConn.write("Move: right");
    // console.log("d is up command");
  }
  if (key === 's') {
    playConn.write("Move: down");
    // console.log("s is up command");
  }
  if (key === 'a') {
    playConn.write("Move: left");
    // console.log("a is up command");
  }
};

const setupInput = function () {
  // get the key what client pressed
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  // THAT KEY is key => call handleUserInput(key)
  stdin.on("key", handleUserInput);

  return stdin;
};
setupInput();


/* 
  (client.js) 
  1. bring the net
  2. make the connect = function(){}
  2-1. wrap everything with connect
  3. valiable conn => create server
  4. conn.on "connect"=> check connect status
  5. conn.on "data" => send some data
  6. exports connect wrap up {}

  (play.js)
  const {connect} = require("./client");
  console.log("connect");
  connect();
  1. bring the {connect} from client.js
  2. check the connection using console.log
  3. call the connect();

  (RUN)
  1. ngrok tcp 3000 (terminal 1)
  2. play.js inside snek-mulitplayer (terminal2)
  3. play.js inside snake-client (terminal3)
  vagrant/week2/snake-client/snek-multiplayer


  ----------

  1.get the key what client pressed and convert to utf8
   inside setupInput function

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();

  2. CTRL+C key for exit : using handleUserInput function
    // THAT KEY is key => call : handleUserInput(key)
    stdin.on("key", handleUserInput);

    return stdin;
  };
  3. Call the setupInput(); When the client connected
  setupInput();

  4. Move the function to index.js 
  and require("index.js")

  ------------

*/  