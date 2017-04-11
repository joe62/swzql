/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ModbusDevices', {
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
			allowNull: false
		},
		Port: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SerialPortParas: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		Address: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		PeriodDIDO: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		PeriodAIAO: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		State: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ArmTime: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'ModbusDevices',
		timestamps: false
	});
};
