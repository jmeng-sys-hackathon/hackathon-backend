// Require statements

const http = require('http');
const express = require("express");
const mysql = require("mysql");
const cors = require('cors');

//Initializing express server and detecting main location for files
const app = express();
const server = http.createServer(app);

//app.use(express.static("views", { "extensions": ["html", "htm"] }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());


// Setting connection object
const connection = {
	host: "sql9.freesqldatabase.com",
	user: "sql9595634",
	password: "MsmL2iKZxQ",
	database: "sql9595634"
}


//END POINTS =====================================================

app.get("/", (req, res) => {
	res.send("server is running...");
});

// users -------------------------------------------------------

app.get("/test", (req, res) => {
	const conn = mysql.createConnection(connection);

	conn.connect((err) => {
		if (err) throw err;

		let sql = "select * FROM test_table";

		conn.query(sql, (err, result, fields) => {
			if (err) throw err;

			res.json(result);

			conn.end(err => {
				if (err) throw err;
			});
		});
	});
})



const PORT = process.env.PORT || 3001;

// SERVER LISTEN ==================================================

server.listen(PORT, () => {
	console.log(`Server has started listening on port ${PORT}`);
});