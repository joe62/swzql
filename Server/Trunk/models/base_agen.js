/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_agen', {
		agenid: {
			type: DataTypes.INTEGER(6),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		agenip: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		agenport: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		WanAddr: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		WanPort: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Domain: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'base_agen',
		timestamps: false
	});
};
