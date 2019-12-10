import { Controller, Get, Post, Body, Param, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('next')
  getNextPage(): string {
    return this.appService.getNextPage();
  }

  @Get('api/user')
  getUser(): object {
    return this.appService.getUser();
  }

  @Post('api/create')
  createUser(@Body() body): object {
    return this.appService.createUser(body);
  }

  @Get('api/fetch-user/:id')
  fetchAUser(@Param('id') id): string {
    return this.appService.fetchAUser(id);
  }
}
