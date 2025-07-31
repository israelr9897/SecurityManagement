import { DataTypes } from 'sequelize';
import { DBService } from 'src/DB/DB.service';

const sequelize = new DBService().getSequelize();

export const Shift = sequelize.define(
  'Shift',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: 'Shifts',
    timestamps: false,
  },
);


Shift.sync();