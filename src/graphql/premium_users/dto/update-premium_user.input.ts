import { CreatePremiumUserInput } from './create-premium_user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePremiumUserInput extends PartialType(CreatePremiumUserInput) {
  @Field(() => Int)
  id: number;
}
