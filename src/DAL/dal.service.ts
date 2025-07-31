import { Injectable } from '@nestjs/common';
import { Assignment } from 'src/modols/Assignment';
import { Shift } from 'src/modols/shift';
import { User } from 'src/modols/user';
import { Model, Op } from 'sequelize';
import { ShiftDTO } from 'src/shifts/shift.Dto';

@Injectable()
export class DalService {
  async findAll(nameTable: any): Promise<any> {
    return await nameTable.findAll({ raw: true });
  }

  async findOneById(nameTable: any, id: string): Promise<any> {
    return await nameTable.findAll({ where: { id: id } });
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
      return { msg: 'assignment added' };
    } catch (error) {
      console.log('insert error massage: ', error);
      return { msg: error };
    }
  }
}
