import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateThemeDetectionLogInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
