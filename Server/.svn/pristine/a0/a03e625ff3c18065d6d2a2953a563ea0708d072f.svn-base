/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('roles', {
		roleid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		rolename: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		ctrlgrade: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		access: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		usertype: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		AutoID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'roles',
		timestamps: false
	});
};
