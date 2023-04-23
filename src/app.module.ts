import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { TerminalGateway } from './terminal/terminal.gateway';
import { TerminalModule } from './terminal/terminal.module';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [EventsModule, TerminalModule],
  controllers: [AppController],
  providers: [AppService, EventsGateway, TerminalGateway],
})
export class AppModule {}
