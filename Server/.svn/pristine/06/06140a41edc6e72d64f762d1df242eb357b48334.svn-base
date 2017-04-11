/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('TVWALLMode', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING(128),
			allowNull: false
		},
		wall: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		vsmode: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		descript: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'TVWALLMode',
		timestamps: false
	});
};
