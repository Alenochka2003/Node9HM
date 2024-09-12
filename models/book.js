import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Проверьте путь к файлу

const Book = sequelize.define('Book', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true, // Sequelize автоматически создаст createdAt и updatedAt
});

export default Book;
