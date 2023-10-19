import { ObjectType, Field, Int, ID } from "@nestjs/graphql";

@ObjectType()
export class PremiumUser {

  @Field(type => ID)
    id: string;

  @Field()
    startedOn: Date;


}