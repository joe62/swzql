/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventLnkOutput', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		EventId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SensorId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Delay: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Do: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'EventLnkOutput',
		timestamps: false
	});
};
