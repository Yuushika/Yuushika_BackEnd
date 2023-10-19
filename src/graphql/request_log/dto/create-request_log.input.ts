import { InputType, Int, Field } from "@nestjs/graphql";

@InputType()
export class CreateRequestLogInput {

  @Field(() => Int, { description: "Example field (placeholder)" })
    exampleField: number;

}