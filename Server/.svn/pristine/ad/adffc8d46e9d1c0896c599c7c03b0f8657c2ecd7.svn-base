/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventPlans', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		EventID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		shldtype: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		exectime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		param: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		actionparam: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		alarmname: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'EventPlans',
		timestamps: false
	});
};
