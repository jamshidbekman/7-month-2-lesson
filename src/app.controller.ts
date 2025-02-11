import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Redirect,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('post')
  addUser(@Body() data: { username: String; password: string }) {
    return this.appService.addUser(data);
  }

  @Put('put')
  updatePassword(@Body() data: { username: string; password: string }): {} {
    return this.appService.updatePassword(data);
  }

  @Delete('delete')
  deleteUser(@Body() data: { username: string }): {} {
    return this.appService.deleteUser(data);
  }

  @Get('kunuz')
  @Redirect('https://kun.uz')
  testRedirect() {}

  @Get('user/:id')
  testParams(@Param() param: { id: string }): string {
    console.log(param);
    return 'Test param decorator';
  }

  @Get('reqres')
  testReqRes(@Req() req: Request, @Res() res: Response): void {
    console.log(req);
    console.log(res);
  }
}
