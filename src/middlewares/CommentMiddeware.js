import Comment from '../models/CommentModel.js';

export async function commentExists(req, res, next) {
    const { id } = req.params;
    const comment = await Comment.findByPk(id);
    if (!comment) {
        return res.status(404).json({ message: 'Comment not found' });
    }
    req.comment = comment;
    next();
}