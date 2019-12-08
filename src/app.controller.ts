import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('next')
  getNextPage(): string{
    return this.appService.getNextPage();
  }

  @Get('v1/api/user')
  getUser(): object{
    return this.appService.getUser();
  }
}
