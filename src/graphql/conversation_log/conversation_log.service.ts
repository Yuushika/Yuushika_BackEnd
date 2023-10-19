import { Injectable } from '@nestjs/common';
import { CreateConversationLogInput } from './dto/create-conversation_log.input';
import { UpdateConversationLogInput } from './dto/update-conversation_log.input';

@Injectable()
export class ConversationLogService {
  create(createConversationLogInput: CreateConversationLogInput) {
    return 'This action adds a new conversationLog';
  }

  findAll() {
    return `This action returns all conversationLog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} conversationLog`;
  }

  update(id: number, updateConversationLogInput: UpdateConversationLogInput) {
    return `This action updates a #${id} conversationLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} conversationLog`;
  }
}
