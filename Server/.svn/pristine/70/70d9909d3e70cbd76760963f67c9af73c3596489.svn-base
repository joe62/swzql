/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuYuanItem', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		TerminalId: {
			type: DataTypes.STRING(50),
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
		YuanId: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		Quality: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		ProxySvrId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: true
		},
		AgenIp: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'McuYuanItem',
		timestamps: false
	});
};
