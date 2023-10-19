import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { ApiTokenService } from "./api_token.service";
import { ApiToken } from "./entities/api_token.entity";
import { CreateApiTokenInput } from "./dto/create-api_token.input";
import { UpdateApiTokenInput } from "./dto/update-api_token.input";

@Resolver(() => ApiToken)
export class ApiTokenResolver {

  constructor(private readonly apiTokenService: ApiTokenService) {}

  @Mutation(() => ApiToken)
  createApiToken(@Args("createApiTokenInput") createApiTokenInput: CreateApiTokenInput) {
    return this.apiTokenService.create(createApiTokenInput);
  }

  @Query(() => [ApiToken], { name: "apiToken" })
  findAll() {
    return this.apiTokenService.findAll();
  }

  @Query(() => ApiToken, { name: "apiToken" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.apiTokenService.findOne(id);
  }

  @Mutation(() => ApiToken)
  updateApiToken(@Args("updateApiTokenInput") updateApiTokenInput: UpdateApiTokenInput) {
    return this.apiTokenService.update(updateApiTokenInput.id, updateApiTokenInput);
  }

  @Mutation(() => ApiToken)
  removeApiToken(@Args("id", { type: () => Int }) id: number) {
    return this.apiTokenService.remove(id);
  }

}