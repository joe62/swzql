/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ISAlarmLogs', {
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
		MessageType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		VistaUser: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		DT: {
			type: DataTypes.DATE,
			allowNull: false
		},
		State: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'ISAlarmLogs',
		timestamps: false
	});
};
