/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TVWallCon', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(50),
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
		descript: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		showorder: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'TVWallCon',
		timestamps: false
	});
};
