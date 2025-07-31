import { DataTypes } from 'sequelize';
import { DBService } from 'src/DB/DB.service';

const sequelize = new DBService().getSequelize();

export const Assignment = sequelize.define(
  'Assignment',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    shiftId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Shifts',
        key: 'id',
      },
    },
  },
  {
    tableName: 'Assignments',
    timestamps: false,
  },
);

Assignment.sync();
