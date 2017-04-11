/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('grpdiv', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		GroupID: {
			type: DataTypes.CHAR(36),
			allowNull: true
		},
		Position: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'grpdiv',
		timestamps: false
	});
};
