/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TVWallEx', {
		wallId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		DomainId: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		AlarmChannBegin: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		AlarmChannEnd: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ShowOrder: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		TourInterval: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		}
	}, {
		tableName: 'TVWallEx',
		timestamps: false
	});
};
