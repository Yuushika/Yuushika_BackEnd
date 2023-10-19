import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class RequestLog {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
