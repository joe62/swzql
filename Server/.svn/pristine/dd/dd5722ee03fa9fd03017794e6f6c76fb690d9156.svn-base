/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('syslog', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Source: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		Logstr: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Tm: {
			type: DataTypes.DATE,
			allowNull: false
		},
		Server: {
			type: DataTypes.STRING(20),
			allowNull: true
		}
	}, {
		tableName: 'syslog',
		timestamps: false
	});
};
