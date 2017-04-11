/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AlarmSecurity', {
		AlarmID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		AlarmHostID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(64),
			allowNull: false
		}
	}, {
		tableName: 'AlarmSecurity',
		timestamps: false
	});
};
