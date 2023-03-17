const {connect} = require("./client");
console.log("connect");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  const handleUserInput = (key) => { 
    process.stdout.write('.');
    if (key === '\u0003') {
      console.log("BYE");
      process.exit();
    }
  };
  
  return stdin;
};
// console.log(stdin);


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
*/  