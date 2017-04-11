/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('camsnapshot', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		pic: {
			type: "LONGBLOB",
			allowNull: true
		},
		eventid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		pictime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		memo: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		preimg: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		posimg: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		ServerIp: {
			type: DataTypes.STRING(32),
			allowNull: true
		}
	}, {
		tableName: 'camsnapshot',
		timestamps: false
	});
};
