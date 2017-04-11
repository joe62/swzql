/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MPEventSources', {
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
		SensorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Subcell: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'MPEventSources',
		timestamps: false
	});
};
