class UserService {
	constructor(db) {
		this.client = db.sequelize;
		this.User = db.User;
		this.Room = db.Room;
		this.Hotel = db.Hotel;
		this.Reservation = db.Reservation;
	}

	async create(firstName, lastName) {
		return this.User.create({
			FirstName: firstName,
			LastName: lastName,
		});
	}

	async getAll() {
		return this.User.findAll({
			where: {},
		});
	}

	async getOne(userId) {
		return await this.User.findOne({
			where: { id: userId },
			include: {
				model: this.Room,
				through: {
					attributes: ['StartDate', 'EndDate'],
				},
				include: {
					model: this.Hotel,
				},
			},
		});
	}

	async deleteUser(userId) {
		return this.User.destroy({
			where: { id: userId },
		});
	}
}
module.exports = UserService;
