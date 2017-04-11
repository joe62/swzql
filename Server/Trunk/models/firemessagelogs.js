/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FireMessageLogs', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		SensorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		AlarmNo: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		MessageType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		AlarmDescription: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		HapTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		RecTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		UserAddr: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'FireMessageLogs',
		timestamps: false
	});
};
