/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vslog', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		vsid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		logstr: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		logtime: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'vslog',
		timestamps: false
	});
};
