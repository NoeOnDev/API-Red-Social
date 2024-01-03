import sequelize from '../database/config.js';
import { DataTypes, Model } from 'sequelize';

class Poster extends Model {}

Poster.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    isPublic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Poster',
    tableName: 'posters',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
});

export default Poster;