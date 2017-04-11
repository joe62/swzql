/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('UsersGroupItems', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		UserGroupID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		UnitID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		UnitType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		UnitName: {
			type: DataTypes.STRING(48),
			allowNull: false
		}
	}, {
		tableName: 'UsersGroupItems',
		timestamps: false
	});
};
