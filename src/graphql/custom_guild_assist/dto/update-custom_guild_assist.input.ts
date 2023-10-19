import { CreateCustomGuildAssistInput } from "./create-custom_guild_assist.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateCustomGuildAssistInput extends PartialType(CreateCustomGuildAssistInput) {

  @Field(() => Int)
    id: number;

}