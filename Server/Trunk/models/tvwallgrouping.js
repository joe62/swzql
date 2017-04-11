/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tvwallgrouping', {
		groupid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		row: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		col: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		groupname: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		grouptype: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'tvwallgrouping',
		timestamps: false
	});
};
