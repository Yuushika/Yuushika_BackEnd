import { Test, TestingModule } from '@nestjs/testing';
import { CustomGuildAssistService } from './custom_guild_assist.service';

describe('CustomGuildAssistService', () => {
  let service: CustomGuildAssistService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomGuildAssistService],
    }).compile();

    service = module.get<CustomGuildAssistService>(CustomGuildAssistService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
