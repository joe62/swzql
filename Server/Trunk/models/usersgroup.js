/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UsersGroup', {
		UserGroupID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		GroupName: {
			type: DataTypes.STRING(48),
			allowNull: false
		},
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'UsersGroup',
		timestamps: false
	});
};
