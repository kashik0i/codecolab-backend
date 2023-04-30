import { Test, TestingModule } from '@nestjs/testing';
import { DockerManagerController } from './docker-manager.controller';

describe('DockerManagerController', () => {
  let controller: DockerManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DockerManagerController],
    }).compile();

    controller = module.get<DockerManagerController>(DockerManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
