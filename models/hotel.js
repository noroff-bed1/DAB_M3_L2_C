module.exports = (sequelize, Sequelize) => {
	const Hotel = sequelize.define(
		'Hotel',
		{
			Name: Sequelize.DataTypes.STRING,
			Location: Sequelize.DataTypes.STRING,
		},
		{
			timestamps: false,
		}
	);

	Hotel.associate = function (models) {
		Hotel.hasMany(models.Room);
		Hotel.belongsToMany(models.User, { through: models.Rate });
	};

	return Hotel;
};

