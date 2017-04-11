/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TVWALLModeCAM', {
		mode: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		tvwall: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		channel: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		cam: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		domainguid: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		cellno: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		campos: {
			type: DataTypes.STRING(64),
			allowNull: true
		}
	}, {
		tableName: 'TVWALLModeCAM',
		timestamps: false
	});
};
