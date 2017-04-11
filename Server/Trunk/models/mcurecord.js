/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuRecord', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		McuId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		TelePhone1: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		TelePhone2: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		DTime: {
			type: DataTypes.STRING(32),
			allowNull: false
		}
	}, {
		tableName: 'McuRecord',
		timestamps: false
	});
};
