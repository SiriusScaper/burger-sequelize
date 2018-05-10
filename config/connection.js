const express = require('express');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize_burgers', 'root', 'root', {
	host: 'localhost',
	port: '3306',
	dialect: 'mysql',
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;

// //Connection to DB
// const connection = mysql.createConnection({
// 	// DB Properties
// 	host: 'localhost',
// 	user: 'root',
// 	password: 'root',
// 	port: 8888,
// 	database: 'burgers_db'
// });

// //Function to connect
// connection.connect(err => {
// 	if (err) {
// 		throw err;
// 	} else {
// 		console.log('Connected');
// 	}
// });

// // Export connection to ORM
// module.exports = connection;
