/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('plans', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		usr: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'plans',
		timestamps: false
	});
};
