/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AlarmHost', {
		AlarmHostID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		ConnParam: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'AlarmHost',
		timestamps: false
	});
};
