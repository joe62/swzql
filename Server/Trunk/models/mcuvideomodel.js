/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuVideoModel', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Model: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Describe: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		URL: {
			type: DataTypes.STRING(128),
			allowNull: true
		}
	}, {
		tableName: 'McuVideoModel',
		timestamps: false
	});
};
