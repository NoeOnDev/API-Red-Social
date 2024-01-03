import User from './UserModel.js';
import Poster from './PosterModel.js';
import Comment from './CommentModel.js';

User.hasMany(Poster, { foreignKey: 'userId' });
Poster.belongsTo(User, { foreignKey: 'userId' });

Poster.hasMany(Comment, { foreignKey: 'posterId' });
Comment.belongsTo(Poster, { foreignKey: 'posterId' });