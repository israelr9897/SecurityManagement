import { Injectable } from '@nestjs/common';
import { Assignment } from 'src/modols/Assignment';
import { Shift } from 'src/modols/shift';
import { Model, Op } from 'sequelize';

@Injectable()
export class DalService {
  async findAll(nameTable: any): Promise<any> {
    return await nameTable.findAll({ raw: true });
  }

  async findOneByUsername(nameTable: any, username: string): Promise<any> {
    return await nameTable.findAll({ where: { username: username } });
  }

  async findShiftByUserId(id: string): Promise<Array<Model>> {
    //grt shifts id by user id
    let shiftsID = await Assignment.findAll({
      where: { userId: id },
      attributes: ['shiftId'],
    });
    shiftsID = shiftsID.map((a) => a.dataValues.shiftId);

    // get shifts by shift id
    let shifts = await Shift.findAll({
      where: {
        id: {
          [Op.in]: shiftsID,
        },
      },
    });
    shifts = shifts.map((a) => a.dataValues);
    return shifts;
  }

  async insert(nameTable: any, data: any): Promise<any> {
    try {
      await nameTable.create(data);
      return { msg: 'added' };
    } catch (error) {
      console.log('insert error massage: ', error);
      return { msg: error };
    }
  }
}
