/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_grpunittype', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		descript: {
			type: DataTypes.STRING(32),
			allowNull: false
		}
	}, {
		tableName: 'base_grpunittype',
		timestamps: false
	});
};
