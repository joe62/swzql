/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ModebusAIAOChannels', {
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
		LC: {
			type: DataTypes.STRING(16),
			allowNull: false
		},
		LowLimite: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		HightLimite: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		ChangeAlarm: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Value: {
			type: DataTypes.DECIMAL,
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
		tableName: 'ModebusAIAOChannels',
		timestamps: false
	});
};
