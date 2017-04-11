/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventLnkmsg', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		EventID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		users: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		roles: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		msg: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'EventLnkmsg',
		timestamps: false
	});
};
