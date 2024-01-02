import Poster from '../models/PosterModel.js';

export async function createPoster(req, res) {
    const { title, content } = req.body;
    const userId = req.user.id;

    try {
        const poster = await Poster.create({ title, content, userId });
        res.status(201).json({ message: 'Poster creado exitosamente', poster });
    } catch (error) {
        res.status(500).json({ message: 'Hubo un error al crear el poster', error });
    }
}