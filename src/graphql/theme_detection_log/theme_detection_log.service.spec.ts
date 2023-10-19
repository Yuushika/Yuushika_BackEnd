import { Test, TestingModule } from '@nestjs/testing';
import { ThemeDetectionLogService } from './theme_detection_log.service';

describe('ThemeDetectionLogService', () => {
  let service: ThemeDetectionLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ThemeDetectionLogService],
    }).compile();

    service = module.get<ThemeDetectionLogService>(ThemeDetectionLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
