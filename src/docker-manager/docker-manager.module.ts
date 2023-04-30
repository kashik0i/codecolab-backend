import { Module } from '@nestjs/common';
import { DockerManagerGateway } from './docker-manager.gateway';
import { DockerManagerService } from './docker-manager.service';
import { DockerManagerController } from './docker-manager.controller';

@Module({
  providers: [DockerManagerGateway, DockerManagerService],
  controllers: [DockerManagerController],
})
export class DockerManagerModule {}
