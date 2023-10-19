import { Test, TestingModule } from '@nestjs/testing';
import { ConversationLogService } from './conversation_log.service';

describe('ConversationLogService', () => {
  let service: ConversationLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversationLogService],
    }).compile();

    service = module.get<ConversationLogService>(ConversationLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
