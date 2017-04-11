/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_videoAnalysis', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		funccode: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		descript: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		descript_chn: {
			type: DataTypes.STRING(64),
			allowNull: false
		}
	}, {
		tableName: 'base_videoAnalysis',
		timestamps: false
	});
};
