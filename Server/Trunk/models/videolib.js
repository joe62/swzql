/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('videolib', {
		vdoid: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		begintm: {
			type: DataTypes.DATE,
			allowNull: false
		},
		RecType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		filepath: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		isbackup: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		endtm: {
			type: DataTypes.DATE,
			allowNull: false
		},
		campos: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		server: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		EventID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'videolib',
		timestamps: false
	});
};
