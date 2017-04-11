/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ViconDevice', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Name: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		ProtocolType: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		ProtocolParam: {
			type: DataTypes.STRING(50),
			allowNull: false
		},
		Port: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		Description: {
			type: DataTypes.STRING(50),
			allowNull: true
		}
	}, {
		tableName: 'ViconDevice',
		timestamps: false
	});
};
