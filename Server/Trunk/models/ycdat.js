/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ycdat', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sensor_id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		value: {
			type: DataTypes.DECIMAL,
			allowNull: false
		},
		state: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		yctm: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'ycdat',
		timestamps: false
	});
};
