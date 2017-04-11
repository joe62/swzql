/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Decoder', {
		DecoderId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Ip: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		Port: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Login: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		Pass: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		DecoderType: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Descript: {
			type: DataTypes.STRING(32),
			allowNull: true
		},
		DomainID: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		DomainGUID: {
			type: DataTypes.CHAR(36),
			allowNull: false
		}
	}, {
		tableName: 'Decoder',
		timestamps: false
	});
};
