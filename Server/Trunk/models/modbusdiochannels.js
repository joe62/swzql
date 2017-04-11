/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ModbusDIOChannels', {
		ChannelID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DeviceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ChannelNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		AlarmType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		LowLevelDes: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		HightLeveDes: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Value: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ArmTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		AlarmTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		AlarmIconId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'ModbusDIOChannels',
		timestamps: false
	});
};
