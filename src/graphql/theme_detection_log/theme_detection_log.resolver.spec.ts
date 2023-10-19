import { Test, TestingModule } from '@nestjs/testing';
import { ThemeDetectionLogResolver } from './theme_detection_log.resolver';
import { ThemeDetectionLogService } from './theme_detection_log.service';

describe('ThemeDetectionLogResolver', () => {
  let resolver: ThemeDetectionLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemeDetectionLogResolver, ThemeDetectionLogService],
    }).compile();

    resolver = module.get<ThemeDetectionLogResolver>(ThemeDetectionLogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
