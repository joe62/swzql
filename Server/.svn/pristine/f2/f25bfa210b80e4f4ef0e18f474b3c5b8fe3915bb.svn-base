/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('mapicons', {
		ICONID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		width: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		height: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		data: {
			type: "LONGBLOB",
			allowNull: true
		},
		type: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Name: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'mapicons',
		timestamps: false
	});
};
