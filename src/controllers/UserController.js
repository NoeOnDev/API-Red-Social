import User from '../models/UserModel.js';

export async function registerUser(req, res) {

    const { name, lastname, birthdate, email, password } = req.body;
    try {
        const user = await User.create({
            name,
            lastname,
            birthdate,
            email,
            password
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}