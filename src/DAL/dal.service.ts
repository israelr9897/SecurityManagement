import { Injectable } from '@nestjs/common';

@Injectable()
export class DalService {
  async findAll(nameTable: any): Promise<any> {
    return await nameTable.findAll({ raw: true });
  }

  async findOneById(nameTable: any, id: string): Promise<any> {
    return await nameTable.findOne({ where: { id: id } });
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
