import { Test, TestingModule } from '@nestjs/testing';
import { ConversationLogResolver } from './conversation_log.resolver';
import { ConversationLogService } from './conversation_log.service';

describe('ConversationLogResolver', () => {
  let resolver: ConversationLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConversationLogResolver, ConversationLogService],
    }).compile();

    resolver = module.get<ConversationLogResolver>(ConversationLogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
