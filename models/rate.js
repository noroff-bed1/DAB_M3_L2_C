module.exports = (sequelize, Sequelize) => {
	const Rate = sequelize.define(
		'Rate',
		{
			Value: {
				type: Sequelize.DataTypes.INTEGER,
				validate: {
					min: 1,
					max: 5,
				},
			},
		},
		{
			timestamps: false,
		}
	);
	return Rate;
};
