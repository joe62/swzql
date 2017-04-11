/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventSource', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		EventID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SourceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'EventSource',
		timestamps: false
	});
};
