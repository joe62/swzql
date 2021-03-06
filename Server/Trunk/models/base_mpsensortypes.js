/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_MPSensorTypes', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		AlarmType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(150),
			allowNull: false
		},
		ProtocolContext: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		Color: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		IconId: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'base_MPSensorTypes',
		timestamps: false
	});
};
