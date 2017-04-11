/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('EventLnkop', {
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
		camid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		preset: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		camaux: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ipdoid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		vsdoindex: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		do: {
			type: DataTypes.INTEGER(4),
			allowNull: true
		},
		delay: {
			type: DataTypes.INTEGER(6),
			allowNull: false
		},
		custom: {
			type: DataTypes.STRING(64),
			allowNull: true
		},
		vsid: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		jzcamin: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'EventLnkop',
		timestamps: false
	});
};
