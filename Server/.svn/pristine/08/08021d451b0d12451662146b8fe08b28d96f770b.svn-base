/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuZoneItem', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ItemName: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		GroupId: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		Showorder: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'McuZoneItem',
		timestamps: false
	});
};
