/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('campresettour', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		preset: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		tourorder: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		tourstop: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'campresettour',
		timestamps: false
	});
};
