const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost', 
    port: 50541,
  });
  conn.setEncoding("utf8"); // interpret data as text

  conn.on("connect", () => {
    console.log("Succesfully connected!");
    conn.write("Name: KIM");
    conn.write("Say: ORANGE");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};
module.exports = {connect};

// ^[[A ^[[C ^[[B ^[[D
// w s d a (up down right left)