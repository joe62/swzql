/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_AccessCtrlMessages', {
		MessageID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		DoorNoPosition: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CardNoPosition: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Message: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		AlarmState: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Mask: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Icon: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'base_AccessCtrlMessages',
		timestamps: false
	});
};
