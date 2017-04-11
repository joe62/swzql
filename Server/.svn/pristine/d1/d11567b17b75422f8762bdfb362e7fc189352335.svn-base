/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('grpunits', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		GroupGUID: {
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
		},
		ShowOrder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'grpunits',
		timestamps: false
	});
};
