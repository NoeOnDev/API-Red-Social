import User from './UserModel.js';
import Poster from './PosterModel.js';

User.hasMany(Poster, { foreignKey: 'userId' });
Poster.belongsTo(User, { foreignKey: 'userId' });