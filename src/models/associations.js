import User from './UserModel.js';
import Poster from './PosterModel.js';
import Comment from './CommentModel.js';
import Like from './LikeModel.js';

User.hasMany(Poster, { foreignKey: 'userId' });
Poster.belongsTo(User, { foreignKey: 'userId' });

Poster.hasMany(Comment, { foreignKey: 'posterId' });
Comment.belongsTo(Poster, { foreignKey: 'posterId' });

User.hasMany(Comment, { foreignKey: 'userId' });
Comment.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Like, { foreignKey: 'userId' });
Like.belongsTo(User, { foreignKey: 'userId' });

Poster.hasMany(Like, { foreignKey: 'posterId' });
Like.belongsTo(Poster, { foreignKey: 'posterId' });