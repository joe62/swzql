/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ISChannels', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DeviceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		MainNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		MinorNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CommandTypes: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Active: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ScheduleID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ArmTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		AlarmTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		AlarmIconId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		State: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'ISChannels',
		timestamps: false
	});
};
