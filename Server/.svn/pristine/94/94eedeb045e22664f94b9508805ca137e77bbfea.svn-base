/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MCUTbl', {
		MCUID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		deviceip: {
			type: DataTypes.STRING(16),
			allowNull: false
		},
		deviceport: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		logname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		logpwd: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		virFirstIp: {
			type: DataTypes.STRING(16),
			allowNull: false
		},
		virLastIp: {
			type: DataTypes.STRING(16),
			allowNull: false
		},
		virMask: {
			type: DataTypes.STRING(16),
			allowNull: false
		}
	}, {
		tableName: 'MCUTbl',
		timestamps: false
	});
};
