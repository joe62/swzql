/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MCUChannel', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		mcuid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		number: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		ip: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		bandwidth: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		vsize: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		fps: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'MCUChannel',
		timestamps: false
	});
};
