/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuBroadcastItem', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		TeleId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		BroadcastId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'McuBroadcastItem',
		timestamps: false
	});
};
