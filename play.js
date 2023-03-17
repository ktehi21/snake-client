const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
// connect();

setupInput(connect());


/* 
  (RUN)
  1. ngrok tcp 3000 (terminal 1)
  2. play.js inside snek-mulitplayer (terminal2)
  3. play.js inside snake-client (terminal3)
  vagrant/week2/snake-client/snek-multiplayer

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



  ----------

  1.get the key what client pressed and convert to utf8
   inside setupInput function

  const setupInput = function () {
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();

  2. CTRL+C key for exit : using handleUserInput function
    // THAT KEY is data => call : handleUserInput(key)
    HAVE TO USE "data", cause we need this data
    to server side. 
    data is the key value
    stdin.on("data", handleUserInput);

    return stdin;
  };
  3. Call the setupInput(); When the client connected
  setupInput();

  4. Move the function to input.js 
  and require("input.js")

  ------------
(input.js)
  1. export setupInput only
  - handleUserInput is only called by setupInput 
    which is already in the same file. 
    Since handleUserInput does not 
    need to be called or referenced elsewhere, 
    it does not need to be exported 
    from the input module.
  
*/  