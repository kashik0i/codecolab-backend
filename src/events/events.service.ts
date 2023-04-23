import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  ping(): string {
    return 'hello';
  }
}
