/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('grpgrade', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		GroupGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		RoleID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		RoleDomainGuid: {
			type: DataTypes.CHAR(36),
			allowNull: false
		}
	}, {
		tableName: 'grpgrade',
		timestamps: false
	});
};
