/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuDispatchUser', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DispatchId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		UserId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'McuDispatchUser',
		timestamps: false
	});
};
