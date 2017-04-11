/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MapSensors', {
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
		IconId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SoureType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SensorType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Points: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Description: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'MapSensors',
		timestamps: false
	});
};
