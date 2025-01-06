import User from './user.model.js';

// Add a new user
export async function adduser(req, res) {
    const { name, phone, email, address } = req.body;

    // Validate inputs
    if (!name || !phone || !email || !address) {
        return res.status(400).send({ msg: "Please provide all required fields." });
    }

    try {
        const newUser = await User.create({ name, phone, email, address });
        return res.status(200).send({ msg: `${name} successfully added` });
    } catch (error) {
        console.error(error);
        return res.status(500).send({ msg: "Something went wrong. Please try again." });
    }
}

// Get all users
export async function getuser(req, res) {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Unable to fetch users", error });
    }
}
