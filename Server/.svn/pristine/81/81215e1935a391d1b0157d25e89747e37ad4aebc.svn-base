/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ISZoneSchedules', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ZonerID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ScheduleID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ScheduleType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'ISZoneSchedules',
		timestamps: false
	});
};
