/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('grptbl', {
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		GroupGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		ParentGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		GroupName: {
			type: DataTypes.STRING(48),
			allowNull: false
		},
		GroupType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ShowOrder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'grptbl',
		timestamps: false
	});
};
