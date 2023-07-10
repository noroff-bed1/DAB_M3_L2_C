module.exports = (sequelize, Sequelize) => {
	const Reservation = sequelize.define(
		'Reservation',
		{
			StartDate: Sequelize.DataTypes.DATE,
			EndDate: Sequelize.DataTypes.DATE,
		},
		{
			timestamps: false,
			hasTrigger: true,
		}
	);
	return Reservation;
};

