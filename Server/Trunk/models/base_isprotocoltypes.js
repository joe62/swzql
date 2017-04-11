/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_ISProtocolTypes', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		AlarmType: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		ProtocolContext: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		SourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		IconId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		PType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'base_ISProtocolTypes',
		timestamps: false
	});
};
