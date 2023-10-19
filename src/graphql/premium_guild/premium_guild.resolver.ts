import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PremiumGuildService } from './premium_guild.service';
import { PremiumGuild } from './entities/premium_guild.entity';
import { CreatePremiumGuildInput } from './dto/create-premium_guild.input';
import { UpdatePremiumGuildInput } from './dto/update-premium_guild.input';

@Resolver(() => PremiumGuild)
export class PremiumGuildResolver {
  constructor(private readonly premiumGuildService: PremiumGuildService) {}

  @Mutation(() => PremiumGuild)
  createPremiumGuild(@Args('createPremiumGuildInput') createPremiumGuildInput: CreatePremiumGuildInput) {
    return this.premiumGuildService.create(createPremiumGuildInput);
  }

  @Query(() => [PremiumGuild], { name: 'premiumGuild' })
  findAll() {
    return this.premiumGuildService.findAll();
  }

  @Query(() => PremiumGuild, { name: 'premiumGuild' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.premiumGuildService.findOne(id);
  }

  @Mutation(() => PremiumGuild)
  updatePremiumGuild(@Args('updatePremiumGuildInput') updatePremiumGuildInput: UpdatePremiumGuildInput) {
    return this.premiumGuildService.update(updatePremiumGuildInput.id, updatePremiumGuildInput);
  }

  @Mutation(() => PremiumGuild)
  removePremiumGuild(@Args('id', { type: () => Int }) id: number) {
    return this.premiumGuildService.remove(id);
  }
}
