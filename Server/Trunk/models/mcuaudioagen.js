/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuAudioAgen', {
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
			allowNull: true
		},
		ReservedStart: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		ReservedEnd: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'McuAudioAgen',
		timestamps: false
	});
};
