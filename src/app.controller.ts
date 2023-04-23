import { Body, Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { SandboxDto } from './dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  health(): string {
    return this.appService.health();
  }

  @Post('sandbox')
  @HttpCode(200)
  async testSandBox(@Body() sandboxDto: SandboxDto): Promise<any> {
    const script = sandboxDto.script;
    return await this.appService.testSandBox(script);
  }
}
