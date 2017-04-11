/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('GISCfg', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		lat: {
			type: "DOUBLE",
			allowNull: true
		},
		lng: {
			type: "DOUBLE",
			allowNull: true
		},
		currentshow: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'GISCfg',
		timestamps: false
	});
};
