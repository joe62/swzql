/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('users', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		usr: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		pwd: {
			type: DataTypes.STRING(38),
			allowNull: false
		},
		remark: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		mac: {
			type: DataTypes.STRING(18),
			allowNull: true
		},
		grade: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		sip: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		AutoID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		}
	}, {
		tableName: 'users',
		timestamps: false
	});
};
