/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuDept', {
		Id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Showorder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'McuDept',
		timestamps: false
	});
};
