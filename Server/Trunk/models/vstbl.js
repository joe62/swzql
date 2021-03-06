/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('vstbl', {
		vsid: {
			type: DataTypes.INTEGER(6),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ip: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		httpport: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		address: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		wanport: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		usr: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		pwd: {
			type: DataTypes.STRING(30),
			allowNull: false
		},
		vspos: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		servertype: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		},
		online: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		lasttime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		Ipinterval: {
			type: DataTypes.INTEGER(6),
			allowNull: true
		},
		domainid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		}
	}, {
		tableName: 'vstbl',
		timestamps: false
	});
};
