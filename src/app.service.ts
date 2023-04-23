import { Injectable } from '@nestjs/common';

const { VM } = require('vm2');

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  health(): string {
    return 'working';
  }

  async testSandBox(script: string): Promise<string> {
    const vm = new VM();

    return vm.run(script);
  }
}
