/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_eventSourcetype', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		SourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Descript: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		ChnDescript: {
			type: DataTypes.STRING(64),
			allowNull: true
		}
	}, {
		tableName: 'base_eventSourcetype',
		timestamps: false
	});
};
