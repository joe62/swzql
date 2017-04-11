/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuDispatchModel', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Model: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'McuDispatchModel',
		timestamps: false
	});
};
