/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MPSubsystems', {
		SubsysID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		PortName: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		SMI: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		SMP: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DT: {
			type: DataTypes.DATE,
			allowNull: false
		},
		SysType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'MPSubsystems',
		timestamps: false
	});
};
