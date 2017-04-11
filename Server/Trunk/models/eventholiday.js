/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventHoliday', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		EventID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ScheduleID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'EventHoliday',
		timestamps: false
	});
};
