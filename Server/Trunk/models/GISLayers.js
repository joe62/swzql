/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('GISLayers', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'GISLayers',
		timestamps: false
	});
};
