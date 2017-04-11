/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('camGuardTourPresets', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		GuardID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		presetNbr: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		position: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		movespeed: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		waitTime: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		tourNbr: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'camGuardTourPresets',
		timestamps: false
	});
};
