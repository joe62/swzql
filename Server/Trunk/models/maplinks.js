/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MapLinks', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		MapId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SensorId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING(250),
			allowNull: false
		},
		Font: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Color: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Points: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		GroupGuid: {
			type: DataTypes.CHAR(36),
			allowNull: true
		}
	}, {
		tableName: 'MapLinks',
		timestamps: false
	});
};
