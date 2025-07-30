import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/users/user.Dto';
import { User } from 'src/modols/user';

@Injectable()
export class DalService {
  async FindAll(): Promise<object> {
    return await User.findAll({ raw: true });
  }

  async insertUser(user: any) {
    console.log(user);
    await User.create(user);
  }
    async FindOneById(Username: string
    ) {
      return User.findOne({where: {username: Username}})
    }

  //   async InsertToUsers(nameTable: string, user: UserDTO) {
  //     const db = await this.pool.connect();
  //     const res = await db?.query(`SELECT * FROM ${nameTable} WHERE id = ${}`);
  //   }
}
