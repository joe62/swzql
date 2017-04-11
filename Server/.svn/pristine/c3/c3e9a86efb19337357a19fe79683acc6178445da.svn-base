/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TVWallGroupEx', {
		AUTOID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		WallId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DecChannId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ShowOrder: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		position: {
			type: DataTypes.STRING(64),
			allowNull: true
		}
	}, {
		tableName: 'TVWallGroupEx',
		timestamps: false
	});
};
