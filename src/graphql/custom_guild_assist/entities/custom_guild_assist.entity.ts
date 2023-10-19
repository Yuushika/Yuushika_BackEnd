import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class CustomGuildAssist {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
