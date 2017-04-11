/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuDispatch', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Title: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		VideoGateway: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		AudioGateway: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		LHelm: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		LYHelm: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		RHelm: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		RYHelm: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'McuDispatch',
		timestamps: false
	});
};
