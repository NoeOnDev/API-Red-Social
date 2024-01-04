import Like from '../models/LikeModel.js';

export async function checkLikeExists(req, res, next) {
    const userId = req.user.id;
    const posterId = req.params.id;

    const existingLike = await Like.findOne({ where: { userId, posterId } });
    if (existingLike) {
        return res.status(400).json({ message: 'You have already liked this poster' });
    }

    next();
}