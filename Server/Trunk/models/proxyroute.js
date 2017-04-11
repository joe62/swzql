/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ProxyRoute', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		route: {
			type: DataTypes.TEXT,
			allowNull: false
		}
	}, {
		tableName: 'ProxyRoute',
		timestamps: false
	});
};
