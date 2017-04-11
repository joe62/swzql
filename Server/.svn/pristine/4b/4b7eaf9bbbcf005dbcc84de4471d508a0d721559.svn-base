/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('base_svrtype', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		servertype: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		descript: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		firmware: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		},
		mpeg4: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		audio: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		comport: {
			type: DataTypes.INTEGER(4),
			allowNull: false
		},
		videoport: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		pluginname: {
			type: DataTypes.STRING(32),
			allowNull: false
		},
		defusr: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		defpwd: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		defnetport: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		defdi: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		defdo: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		videofunc: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'base_svrtype',
		timestamps: false
	});
};
