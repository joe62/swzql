/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuZoneGroup', {
		Id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		GroupName: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		GroupType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DispatchId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Showorder: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'McuZoneGroup',
		timestamps: false
	});
};
