import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { TerminalModule } from './terminal/terminal.module';
import { DockerManagerModule } from './docker-manager/docker-manager.module';

@Module({
  imports: [EventsModule, TerminalModule, DockerManagerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
