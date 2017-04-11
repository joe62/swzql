/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('FireMessages', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DeviceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SensorNo: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		MessageType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Active: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'FireMessages',
		timestamps: false
	});
};
