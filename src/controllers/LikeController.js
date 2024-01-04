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

export async function removeLikeFromPoster (req, res) {
    try {
        const like = req.like;

        await like.destroy();
        res.status(200).json({ message: 'Like successfully removed', like });
    } catch (error) {
        res.status(500).json({ message: 'There was an error removing the like', error });
    }
}

export async function getLikesFromPoster (req, res) {
    try {
        const posterId = req.params.id;

        const likes = await Like.findAll({ where: { posterId } });
        res.status(200).json({ message: 'Likes successfully fetched', likes });
    } catch (error) {
        res.status(500).json({ message: 'There was an error fetching the likes', error });
    }
}

export async function getNumberLikesFromPoster (req, res) {
    try {
        const posterId = req.params.id;

        const count = await Like.count({ where: { posterId } });
        res.status(200).json({ message: 'Likes successfully counted', count });
    } catch (error) {
        res.status(500).json({ message: 'There was an error counting the likes', error });
    }
}