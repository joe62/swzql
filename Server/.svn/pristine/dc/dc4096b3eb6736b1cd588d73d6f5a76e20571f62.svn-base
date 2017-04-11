/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuVideoAgen', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		IP: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		Port: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		Username: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		Password: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		AgenId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		virFirstIp: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		virLastIp: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		virMark: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'McuVideoAgen',
		timestamps: false
	});
};
