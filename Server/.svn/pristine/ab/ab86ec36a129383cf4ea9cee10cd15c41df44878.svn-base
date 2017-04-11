/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_server', {
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false,
			primaryKey: true
		},
		address: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		LongName: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		owner: {
			type: DataTypes.STRING(48),
			allowNull: false
		},
		ShortName: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		URL: {
			type: DataTypes.STRING(128),
			allowNull: false
		},
		ParentGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		},
		ShowOrder: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		DBConnStr: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		URL2: {
			type: DataTypes.STRING(128),
			allowNull: true
		},
		MainNucles: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'base_server',
		timestamps: false
	});
};
