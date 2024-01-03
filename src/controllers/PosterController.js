import { validationResult } from 'express-validator';
import Poster from '../models/PosterModel.js';

export async function createPoster(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors.array() });
    }
    try {
        const { title, content, isPublic } = req.body;
        const userId = req.user.id;
        const poster = await Poster.create({ title, content, isPublic, userId });
        res.status(201).json({ message: 'Poster successfully created', poster });
    } catch (error) {
        res.status(500).json({ message: 'There was an error creating the poster', error });
    }
}

export async function getPostersPublic (req, res) {
    try {
        const posters = await Poster.findAll({ where: { isPublic: true } });
        res.status(200).json({ posters });
    } catch (error) {
        res.status(500).json({ message: 'There was an error getting the posters', error });
    }
}

export async function getPostersForUser (req, res) {
    try {
        const userId = req.user.id;
        const posters = await Poster.findAll({ where: { userId } });
        res.status(200).json({ posters });
    } catch (error) {
        res.status(500).json({ message: 'There was an error getting the posters', error });
    }
}