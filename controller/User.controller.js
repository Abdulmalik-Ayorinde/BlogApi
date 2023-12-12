const User = require("../model/User.model")

async function CreateUser(req, res) {
	try {
		const user = new User(req.body)

		await user.save()

		res.status(201).json({
			message: "User Created",
			user: user,
		})
	} catch (error) {
		console.log(error)
	}
}

module.exports = { CreateUser }
