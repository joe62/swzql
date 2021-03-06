/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TeleSensorDevice', {
		DeviceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		ConnParam: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DeviceIP: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		DevicePort: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Deviceuser: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		DevicePass: {
			type: DataTypes.STRING(32),
			allowNull: true
		}
	}, {
		tableName: 'TeleSensorDevice',
		timestamps: false
	});
};
