/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('McuYuan', {
		Id: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		Name: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		Template: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		ConQuality: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		Showorder: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DispatchId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'McuYuan',
		timestamps: false
	});
};
