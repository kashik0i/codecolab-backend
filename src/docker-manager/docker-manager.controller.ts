import { Controller, Get } from '@nestjs/common';
import { DockerManagerService } from './docker-manager.service';

@Controller('docker-manager')
export class DockerManagerController {
  constructor(private readonly manager: DockerManagerService) {}

  @Get('init')
  public init() {
    return this.manager.init();
  }
}
