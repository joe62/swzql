/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('cammode', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		descript: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		mode: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'cammode',
		timestamps: false
	});
};
