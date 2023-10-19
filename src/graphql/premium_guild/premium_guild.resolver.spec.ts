import { Test, TestingModule } from '@nestjs/testing';
import { PremiumGuildResolver } from './premium_guild.resolver';
import { PremiumGuildService } from './premium_guild.service';

describe('PremiumGuildResolver', () => {
  let resolver: PremiumGuildResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PremiumGuildResolver, PremiumGuildService],
    }).compile();

    resolver = module.get<PremiumGuildResolver>(PremiumGuildResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
