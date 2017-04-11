/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('story', {
		id: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		author: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		}
	}, {
		tableName: 'story',
		timestamps: false
	});
};
