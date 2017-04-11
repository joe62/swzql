/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ClientProxyServer', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		descript: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		proxyserver: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		iprange: {
			type: DataTypes.STRING(128),
			allowNull: false
		}
	}, {
		tableName: 'ClientProxyServer',
		timestamps: false
	});
};
