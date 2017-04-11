/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('laststatus', {
		groupid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		tvwallid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		cellid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		selected: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'laststatus',
		timestamps: false
	});
};
