import { Test, TestingModule } from '@nestjs/testing';
import { DockerManagerGateway } from './docker-manager.gateway';

describe('DockerManagerGateway', () => {
  let gateway: DockerManagerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DockerManagerGateway],
    }).compile();

    gateway = module.get<DockerManagerGateway>(DockerManagerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
