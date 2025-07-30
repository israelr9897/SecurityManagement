import { Injectable } from '@nestjs/common';

@Injectable()
export class DalService {
  async findAll(nameTable: any): Promise<object> {
    return await nameTable.findAll({ raw: true });
  }

  async findOneById(nameTable: any, id: string) {
    return await nameTable.findOne({ where: { id: id } });
  }

  async insert(nameTable: any, data: any) {
    await nameTable.create(data);
  }
}
