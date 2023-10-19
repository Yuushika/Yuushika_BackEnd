import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CustomGuildAssistService } from './custom_guild_assist.service';
import { CustomGuildAssist } from './entities/custom_guild_assist.entity';
import { CreateCustomGuildAssistInput } from './dto/create-custom_guild_assist.input';
import { UpdateCustomGuildAssistInput } from './dto/update-custom_guild_assist.input';

@Resolver(() => CustomGuildAssist)
export class CustomGuildAssistResolver {
  constructor(private readonly customGuildAssistService: CustomGuildAssistService) {}

  @Mutation(() => CustomGuildAssist)
  createCustomGuildAssist(@Args('createCustomGuildAssistInput') createCustomGuildAssistInput: CreateCustomGuildAssistInput) {
    return this.customGuildAssistService.create(createCustomGuildAssistInput);
  }

  @Query(() => [CustomGuildAssist], { name: 'customGuildAssist' })
  findAll() {
    return this.customGuildAssistService.findAll();
  }

  @Query(() => CustomGuildAssist, { name: 'customGuildAssist' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.customGuildAssistService.findOne(id);
  }

  @Mutation(() => CustomGuildAssist)
  updateCustomGuildAssist(@Args('updateCustomGuildAssistInput') updateCustomGuildAssistInput: UpdateCustomGuildAssistInput) {
    return this.customGuildAssistService.update(updateCustomGuildAssistInput.id, updateCustomGuildAssistInput);
  }

  @Mutation(() => CustomGuildAssist)
  removeCustomGuildAssist(@Args('id', { type: () => Int }) id: number) {
    return this.customGuildAssistService.remove(id);
  }
}
