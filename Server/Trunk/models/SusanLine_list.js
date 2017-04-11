/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('SusanLine_list', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Color: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Width: {
			type: "DOUBLE",
			allowNull: true
		},
		Points: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Addinfo: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'SusanLine_list',
		timestamps: false
	});
};
