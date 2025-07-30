import { DataTypes } from 'sequelize';
import { DBService } from 'src/DB/DB.service';

// let u = new DBService();
const sequelize = new DBService().getSequelize()

export const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    hash_password: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Users',
    timestamps: false,
  },
);

User.sync();
