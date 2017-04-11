/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ISDevicesHosts', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		ProtocolType: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Encoding: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		SourceType: {
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
		ReconnectionStrategy: {
			type: DataTypes.STRING(70),
			allowNull: true
		},
		UserName: {
			type: DataTypes.STRING(30),
			allowNull: true
		},
		Password: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Address: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		PeriodI: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		PeriodII: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ArmTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		AlarmTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		State: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'ISDevicesHosts',
		timestamps: false
	});
};
