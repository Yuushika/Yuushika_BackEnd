import { Module } from '@nestjs/common';
import { ConversationLogService } from './conversation_log.service';
import { ConversationLogResolver } from './conversation_log.resolver';

@Module({
  providers: [ConversationLogResolver, ConversationLogService],
})
export class ConversationLogModule {}
