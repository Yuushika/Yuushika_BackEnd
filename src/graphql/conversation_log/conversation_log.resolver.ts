import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { ConversationLogService } from "./conversation_log.service";
import { ConversationLog } from "./entities/conversation_log.entity";
import { CreateConversationLogInput } from "./dto/create-conversation_log.input";
import { UpdateConversationLogInput } from "./dto/update-conversation_log.input";

@Resolver(() => ConversationLog)
export class ConversationLogResolver {

  constructor(private readonly conversationLogService: ConversationLogService) {}

  @Mutation(() => ConversationLog)
  createConversationLog(@Args("createConversationLogInput") createConversationLogInput: CreateConversationLogInput) {
    return this.conversationLogService.create(createConversationLogInput);
  }

  @Query(() => [ConversationLog], { name: "conversationLog" })
  findAll() {
    return this.conversationLogService.findAll();
  }

  @Query(() => ConversationLog, { name: "conversationLog" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.conversationLogService.findOne(id);
  }

  @Mutation(() => ConversationLog)
  updateConversationLog(@Args("updateConversationLogInput") updateConversationLogInput: UpdateConversationLogInput) {
    return this.conversationLogService.update(updateConversationLogInput.id, updateConversationLogInput);
  }

  @Mutation(() => ConversationLog)
  removeConversationLog(@Args("id", { type: () => Int }) id: number) {
    return this.conversationLogService.remove(id);
  }

}