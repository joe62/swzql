/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('camGuardTours', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		running: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		name: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		GuardNbr: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		tourPos: {
			type: "LONGBLOB",
			allowNull: true
		}
	}, {
		tableName: 'camGuardTours',
		timestamps: false
	});
};
