/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mapitemtbl', {
		itemid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		mapid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		itemleft: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		itemtop: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		itemwidth: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		itemheight: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		itemname: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		sqlid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		itemtype: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		color: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		font: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		descript: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		iconID: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		groupGUID: {
			type: DataTypes.CHAR(36),
			allowNull: true
		}
	}, {
		tableName: 'mapitemtbl',
		timestamps: false
	});
};
