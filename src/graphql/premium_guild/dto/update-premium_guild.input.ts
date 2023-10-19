import { CreatePremiumGuildInput } from './create-premium_guild.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePremiumGuildInput extends PartialType(CreatePremiumGuildInput) {
  @Field(() => Int)
  id: number;
}
