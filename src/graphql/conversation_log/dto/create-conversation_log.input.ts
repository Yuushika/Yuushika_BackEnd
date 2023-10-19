import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateConversationLogInput {

  @Field(() => Int, { description: "Example field (placeholder)" })
    exampleField: number;

}