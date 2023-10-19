import { CreateConversationLogInput } from './create-conversation_log.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateConversationLogInput extends PartialType(CreateConversationLogInput) {
  @Field(() => Int)
  id: number;
}
