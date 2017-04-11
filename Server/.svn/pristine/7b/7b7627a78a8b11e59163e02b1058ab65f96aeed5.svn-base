/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MPDisSegments', {
		DisSegmentID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		SensorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		StartSubcellNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		EndSubcellNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DisSegmentNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		StartPoint: {
			type: DataTypes.STRING(12),
			allowNull: false
		},
		EndPoint: {
			type: DataTypes.STRING(12),
			allowNull: false
		},
		DT: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'MPDisSegments',
		timestamps: false
	});
};
