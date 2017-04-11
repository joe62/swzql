/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('GISDetail', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		typepid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		bindid: {
			type: DataTypes.STRING(50),
			allowNull: true
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
		lowshow: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		highshow: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		areapid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		emapid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'GISDetail',
		timestamps: false
	});
};
