import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  constructor( private httpService: HttpService ){}

  getComics( id: Number ) {
    return this.httpService.get(`https://xkcd.com/${id}/info.0.json`)
  }
}
