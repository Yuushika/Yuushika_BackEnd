import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ThemeDetectionLog {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
