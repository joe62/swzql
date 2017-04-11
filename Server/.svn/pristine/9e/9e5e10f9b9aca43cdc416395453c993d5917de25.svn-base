/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Matrixtbl', {
		jzid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		descript: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		jzlogin: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		mode: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'Matrixtbl',
		timestamps: false
	});
};
