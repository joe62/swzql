/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('maplist', {
		mapid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		shortname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		longname: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		mapwidth: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		mapheight: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		defaultmap: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		mapimage: {
			type: "LONGBLOB",
			allowNull: true
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		thumbnail: {
			type: "LONGBLOB",
			allowNull: true
		}
	}, {
		tableName: 'maplist',
		timestamps: false
	});
};
