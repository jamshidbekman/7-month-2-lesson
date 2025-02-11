import { Injectable } from '@nestjs/common';

type Res = {
  message: string;
}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  addUser(data: {}): Res {
    console.log(data);
    return { message: 'User successfully added' };
  }
  updatePassword(data: {}): Res {
    console.log(data);
    return { message: 'Password successfully updated' };
  }
  deleteUser(data: {}): Res {
    console.log(data);
    return { message: 'User successfully deleted' };
  }
}
