/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Matrixcamtbl', {
		jzcamid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		jzid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		videoin: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		descript: {
			type: DataTypes.STRING(64),
			allowNull: false
		}
	}, {
		tableName: 'Matrixcamtbl',
		timestamps: false
	});
};
