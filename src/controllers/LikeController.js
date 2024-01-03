import Like from '../models/LikeModel.js';
import User from '../models/UserModel.js';

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

export async function getLikesFromPoster(req, res) {
    try {
        const { posterId } = req.params;

        const likes = await Like.findAll({
            where: { posterId },
            include: [{
                model: User,
                attributes: ['name'],
            }],
            order: [['created_at', 'DESC']]
        });

        res.status(200).json({ message: 'Likes successfully obtained', likes });
    } catch (error) {
        res.status(500).json({ message: 'There was an error obtaining the likes', error });
    }
}

export async function deleteLike (req, res) {
    try {
        const like = req.like;

        await like.destroy();
        res.status(200).json({ message: 'Like successfully deleted', like });
    } catch (error) {
        res.status(500).json({ message: 'There was an error deleting the like', error });
    }
}