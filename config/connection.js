var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env,JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: "v6dymq77y28v36ow:mylbedz39vhz95jw@mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "v6dymq77y28v36ow",
  password: "mylbedz39vhz95jw",
  database: "sbrznbfxqz2hitcq"
});
};

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// connection.connect();
module.exports = connection;