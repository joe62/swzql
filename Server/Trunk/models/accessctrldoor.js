/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AccessCtrlDoor', {
		DoorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DeviceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DoorNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		MessageTypes: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ArmTime: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'AccessCtrlDoor',
		timestamps: false
	});
};
