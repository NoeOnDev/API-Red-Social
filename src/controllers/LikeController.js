import Like from '../models/LikeModel.js';

export async function addLikeToPoster (req, res) {
    try {
        const userId = req.user.id;
        const posterId = req.params.id;

        const like = await Like.create({ userId, posterId });
        res.status(201).json({ message: 'Like successfully created', like });
    } catch (error) {
        res.status(500).json({ message: 'There was an error creating the like', error });
    }
}