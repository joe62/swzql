/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('hotspare', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		agenid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'hotspare',
		timestamps: false
	});
};
