import { Test, TestingModule } from '@nestjs/testing';
import { CustomGuildAssistResolver } from './custom_guild_assist.resolver';
import { CustomGuildAssistService } from './custom_guild_assist.service';

describe('CustomGuildAssistResolver', () => {
  let resolver: CustomGuildAssistResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomGuildAssistResolver, CustomGuildAssistService],
    }).compile();

    resolver = module.get<CustomGuildAssistResolver>(CustomGuildAssistResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
