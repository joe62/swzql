/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usrlog', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		usrID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		usr: {
			type: DataTypes.STRING(24),
			allowNull: false
		},
		usrip: {
			type: DataTypes.STRING(15),
			allowNull: true
		},
		logstr: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		tm: {
			type: DataTypes.DATE,
			allowNull: false
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'usrlog',
		timestamps: false
	});
};
