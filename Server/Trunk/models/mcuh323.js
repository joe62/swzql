/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuH323', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ipaddr: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		usr: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'McuH323',
		timestamps: false
	});
};
