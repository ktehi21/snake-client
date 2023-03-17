

// setup interface to handle user input from stdin
const handleUserInput = (key) => { 
  if (key === '\u0003') {
    console.log("BYE");
    process.exit();
  }
  if (key === 'w') {
    console.log("Move: up");
  }
  if (key === 'd') {
    console.log("Move: right");
  }
  if (key === 's') {
    console.log("Move: down");
  }
  if (key === 'a') {
    console.log("Move: left");
  }
  // const playConn = connect();
  // if (key === 'w') {
  //   playConn.write("Move: up");
  //   // console.log("w is up command");
  // }
  // if (key === 'd') {
  //   playConn.write("Move: right");
  //   // console.log("d is up command");
  // }
  // if (key === 's') {
  //   playConn.write("Move: down");
  //   // console.log("s is up command");
  // }
  // if (key === 'a') {
  //   playConn.write("Move: left");
  //   // console.log("a is up command");
  // }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();


  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {setupInput}