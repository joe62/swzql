/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Events', {
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
		EventName: {
			type: DataTypes.STRING(64),
			allowNull: false
		},
		z1: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		z2: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		z3: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		z4: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		z5: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		z6: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		z7: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		memo: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		needACK: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'Events',
		timestamps: false
	});
};
