/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('online', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		usr: {
			type: DataTypes.STRING(24),
			allowNull: false
		},
		logintm: {
			type: DataTypes.DATE,
			allowNull: false
		},
		status: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		ip: {
			type: DataTypes.STRING(32),
			allowNull: true
		}
	}, {
		tableName: 'online',
		timestamps: false
	});
};
