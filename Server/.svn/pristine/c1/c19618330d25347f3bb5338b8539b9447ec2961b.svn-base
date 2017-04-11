/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ViconMacro', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		DeviceId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		MacroNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		MacroName: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'ViconMacro',
		timestamps: false
	});
};
