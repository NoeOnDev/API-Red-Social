import { validationResult } from 'express-validator';
import Comment from '../models/CommentModel.js';
import User from '../models/UserModel.js';

export async function addCommentToPoster (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { content } = req.body;
        const userId = req.user.id;
        const posterId = req.params.id;

        const comment = await Comment.create({ content, userId, posterId });
        res.status(201).json({ message: 'Comment successfully created', comment });
    } catch (error) {
        res.status(500).json({ message: 'There was an error creating the comment', error });
    }
}

export async function getCommentsFromPoster(req, res) {
    try {
        const { posterId } = req.params;

        const comments = await Comment.findAll({
            where: { posterId },
            include: [{
                model: User,
                attributes: ['name'],
            }],
            order: [['created_at', 'DESC']]
        });

        res.status(200).json({ message: 'Comments successfully obtained', comments });
    } catch (error) {
        res.status(500).json({ message: 'There was an error obtaining the comments', error });
    }
}

export async function updateComment (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const { id } = req.params;
        const { content } = req.body;
        const comment = await Comment.findByPk(id);

        if (!comment) {
            return res.status(404).json({ message: 'Comment not found' });
        }
        await comment.update({ content });
        res.status(200).json({ message: 'Comment successfully updated', comment });
    } catch (error) {
        res.status(500).json({ message: 'There was an error updating the comment', error });
    }
}