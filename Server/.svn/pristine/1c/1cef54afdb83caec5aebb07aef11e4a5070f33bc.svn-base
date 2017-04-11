/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuZoneTerminal', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ItemId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DeviceId: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		DeviceName: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		DeviceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		AgenId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		AgenIp: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		Showorder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		DomainGuid: {
			type: DataTypes.CHAR(36),
			allowNull: true
		},
		AplyData: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'McuZoneTerminal',
		timestamps: false
	});
};
