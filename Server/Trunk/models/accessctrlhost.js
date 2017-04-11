/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AccessCtrlHost', {
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
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		IP: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		Port: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		SerialPortParas: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		Address: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		MessageTypes: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Encoding: {
			type: DataTypes.STRING(10),
			allowNull: true
		},
		Active: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ArmTime: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'AccessCtrlHost',
		timestamps: false
	});
};
