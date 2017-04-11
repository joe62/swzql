/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventLnkrec', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		EventID: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		},
		camid: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		},
		reclen: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		prelen: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'EventLnkrec',
		timestamps: false
	});
};
