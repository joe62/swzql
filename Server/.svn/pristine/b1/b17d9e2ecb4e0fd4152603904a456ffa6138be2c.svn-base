/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AccessCtrlMessagesLog', {
		MessageLogID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ADID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		CardNo: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		MessageID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		SourceType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Datetime: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'AccessCtrlMessagesLog',
		timestamps: false
	});
};
