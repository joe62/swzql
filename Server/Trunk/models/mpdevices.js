/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MPDevices', {
		DeviceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		SubsysID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		SubcellA: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SubcellB: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DeviceNo: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		KeyPoint: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		Points: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		SourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DT: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'MPDevices',
		timestamps: false
	});
};
