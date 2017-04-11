/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('planItems', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		planId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		UserName: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'planItems',
		timestamps: false
	});
};
