import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('comic')
export class AppController {

  constructor(private readonly appService: AppService) {}

  @Get(':id')
  async getHello( @Param('id', ParseIntPipe) id: Number  ) {
    const respuesta = (await this.appService.getComics( id ).toPromise()).data
    return { data: respuesta, status: 200, message: 'Ok', }
  }
}
