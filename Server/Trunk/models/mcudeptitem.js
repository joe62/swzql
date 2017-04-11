/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuDeptItem', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		TerminalId: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		DepartmentId: {
			type: DataTypes.CHAR(36),
			allowNull: false
		}
	}, {
		tableName: 'McuDeptItem',
		timestamps: false
	});
};
