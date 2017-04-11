/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TeleSensor', {
		SensorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DeviceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SensorName: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		Port: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		LC: {
			type: DataTypes.STRING(16),
			allowNull: true
		},
		LowLimite: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		HighLimite: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		RangeAlarm: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		ChangeAlarm: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		intertm: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'TeleSensor',
		timestamps: false
	});
};
