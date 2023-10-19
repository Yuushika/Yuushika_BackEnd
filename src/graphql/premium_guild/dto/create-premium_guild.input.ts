import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePremiumGuildInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
