/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ServerMonitor', {
		AUTOID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ServerIp: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		ServerPort: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Descript: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		NetType: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		online: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		lasttime: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'ServerMonitor',
		timestamps: false
	});
};
