// const orm = require('../config/orm.js');
const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

module.exports = function(sequelize, DataTypes) {
	return (Burgers = sequelize.define('Burgers', {
		burger_name: DataTypes.STRING,
		devoured: DataTypes.BOOLEAN
	}));
};

// const burger = {
// 	selectAll: cb => {
// 		orm.selectAll('burgers', res => cb(res));
// 	},
// 	insertOne: (valOfCol, cb) => {
// 		orm.insertOne('burgers', 'burger_name', valOfCol, res => {
// 			cb(res);
// 		});
// 	},
// 	updateOne: (valOfCol, id, cb) => {
// 		orm.updateOne('burgers', 'devoured', valOfCol, id, res => {
// 			cb(res);
// 		});
// 	}
// };

// module.exports = burger;
