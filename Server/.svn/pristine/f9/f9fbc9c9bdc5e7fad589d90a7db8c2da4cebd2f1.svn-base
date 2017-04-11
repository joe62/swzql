/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('camholiday', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ScheduleID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'camholiday',
		timestamps: false
	});
};
