const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');

// REGISTER
// no way to know how long the registration will take so this is an async function
router.post('/register', async (req, res) => {
	try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt)
		const newUser = new User({
			username: req.body.username,
			email: req.body.email,
			password: hashedPass,
		});
		//save method is coming from mongoose
		const user = await newUser.save();
		res.status(200).json(user);
	} catch (err) {
		res.status(500).json(err);
	}
});

// LOGIN

module.exports = router;
