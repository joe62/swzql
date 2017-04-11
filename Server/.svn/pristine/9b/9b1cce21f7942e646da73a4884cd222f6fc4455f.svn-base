/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Admin_Grade', {
		AUTOID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ROLEID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		VSID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		GROUPID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		}
	}, {
		tableName: 'Admin_Grade',
		timestamps: false
	});
};
