/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_FireMessagesTypes', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		MessageDescription: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		MessageType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Color: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'base_FireMessagesTypes',
		timestamps: false
	});
};
