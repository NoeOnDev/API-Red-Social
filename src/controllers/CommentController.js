import Comment from '../models/CommentModel.js';

export async function addCommentToPoster (req, res) {
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