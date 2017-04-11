/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('its', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		ip: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		chan: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		carpicture: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		platepicture: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		drivechan: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		vehicletype: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		vehicleattribute: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		IllegalType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		PlateType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		platecolor: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		plateLicense: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		CarDirectionType: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Dir: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		detectype: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		PilotSafebelt: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CopilotSafebelt: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		PilotSunVisor: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CopilotSunVisor: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		speed: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		speedlimit: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		carcolor: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		tsURL: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		plateURL: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		mixserverip: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		campos: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'its',
		timestamps: false
	});
};
