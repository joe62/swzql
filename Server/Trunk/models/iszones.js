/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ISZones', {
		ZoneID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ZoneName: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		Action: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		StartDateTime: {
			type: DataTypes.DATE,
			allowNull: false
		},
		EndDateTime: {
			type: DataTypes.DATE,
			allowNull: false
		}
	}, {
		tableName: 'ISZones',
		timestamps: false
	});
};
