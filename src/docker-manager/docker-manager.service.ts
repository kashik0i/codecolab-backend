import { Injectable } from '@nestjs/common';

@Injectable()
export class DockerManagerService {
  init() {
    return 'initializing...';
  }
}
