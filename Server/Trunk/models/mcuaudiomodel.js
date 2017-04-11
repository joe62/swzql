/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuAudioModel', {
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
		describe: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		URL: {
			type: DataTypes.STRING(128),
			allowNull: true
		}
	}, {
		tableName: 'McuAudioModel',
		timestamps: false
	});
};
