/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventLog', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		sourceID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		sourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		sourcename: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		eventid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		descript: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		EventTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		acked: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ackuser: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		acktime: {
			type: DataTypes.DATE,
			allowNull: true
		},
		pic1: {
			type: "LONGBLOB",
			allowNull: true
		},
		pic2: {
			type: "LONGBLOB",
			allowNull: true
		}
	}, {
		tableName: 'EventLog',
		timestamps: false
	});
};
