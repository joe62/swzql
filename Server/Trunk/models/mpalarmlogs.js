/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('MPAlarmLogs', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		SensorID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SubCellNo: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		DT: {
			type: DataTypes.DATE,
			allowNull: false
		},
		Position: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		State: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		AckTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		ConfirmTime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		CUserId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		}
	}, {
		tableName: 'MPAlarmLogs',
		timestamps: false
	});
};
