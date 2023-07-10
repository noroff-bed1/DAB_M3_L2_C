module.exports = (sequelize, Sequelize) => {
	const Room = sequelize.define(
		'Room',
		{
			PricePerDay: Sequelize.DataTypes.DECIMAL,
			Capacity: Sequelize.DataTypes.INTEGER,
		},
		{
			timestamps: false,
		}
	);

	Room.associate = function (models) {
		Room.belongsTo(models.Hotel);
		Room.belongsToMany(models.User, { through: models.Reservation });
	};

	return Room;
};

