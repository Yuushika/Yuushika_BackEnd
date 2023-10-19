import { Test, TestingModule } from '@nestjs/testing';
import { PremiumGuildService } from './premium_guild.service';

describe('PremiumGuildService', () => {
  let service: PremiumGuildService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PremiumGuildService],
    }).compile();

    service = module.get<PremiumGuildService>(PremiumGuildService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
