import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCustomGuildAssistInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
