var mysql = require('mysql');
var connection;

if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
	connection = mysql.createConnection({
	host: 'mna97msstjnkkp7h.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
	user: 'v6dymq77y28v36ow',
	password:'mylbedz39vhz95jw',
	database: 'sbrznbfxqz2hitcq'
	})
}

// var connection = mysql.createConnection({
// 	port: 3306,
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'password',
// 	database: 'burgers_db'
// });

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('Connection Sucessful! and connected as id ' + connection.threadId);
});

module.exports = connection;
