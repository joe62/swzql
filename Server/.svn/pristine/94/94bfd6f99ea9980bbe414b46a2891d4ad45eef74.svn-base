/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tvgrp', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		wallID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		camID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		deorder: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'tvgrp',
		timestamps: false
	});
};
