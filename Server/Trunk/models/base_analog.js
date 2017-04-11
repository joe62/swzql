/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_analog', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		descript: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		unitvalue: {
			type: DataTypes.STRING(16),
			allowNull: false
		}
	}, {
		tableName: 'base_analog',
		timestamps: false
	});
};
