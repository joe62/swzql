/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TVWallCameras', {
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
		CamId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ShowOrder: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DomainGuid: {
			type: DataTypes.CHAR(36),
			allowNull: false
		}
	}, {
		tableName: 'TVWallCameras',
		timestamps: false
	});
};
