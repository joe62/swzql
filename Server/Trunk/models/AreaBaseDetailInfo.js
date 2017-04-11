/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('AreaBaseDetailInfo', {
		Id: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		AreaId: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		Image: {
			type: "LONGBLOB",
			allowNull: true
		},
		label1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		cfg1: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		label2: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		cfg2: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'AreaBaseDetailInfo',
		timestamps: false
	});
};
