import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Guild {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
