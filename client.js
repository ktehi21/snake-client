const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', 
    port: 50541,
  });

  conn.setEncoding("utf8"); // interpret data as text
  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log("welcome!");
  });
  return conn;
};

module.exports = connect;

// console.log("Connecting ...");
// connect();