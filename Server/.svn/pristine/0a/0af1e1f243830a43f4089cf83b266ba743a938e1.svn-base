/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FireHosts', {
		DeviceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		IP: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		Port: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		SerialPortParas: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Encoding: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		Address: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Active: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		UserNo: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'FireHosts',
		timestamps: false
	});
};
