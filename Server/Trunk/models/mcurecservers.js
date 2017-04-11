/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mcurecservers', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		ip: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		port: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		default: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'mcurecservers',
		timestamps: false
	});
};
