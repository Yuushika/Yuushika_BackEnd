import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { PremiumUsersService } from "./premium_users.service";
import { PremiumUser } from "./entities/premium_user.entity";
import { CreatePremiumUserInput } from "./dto/create-premium_user.input";
import { UpdatePremiumUserInput } from "./dto/update-premium_user.input";

@Resolver(() => PremiumUser)
export class PremiumUsersResolver {

  constructor(private readonly premiumUsersService: PremiumUsersService) {}

  @Mutation(() => PremiumUser)
  createPremiumUser(@Args("createPremiumUserInput") createPremiumUserInput: CreatePremiumUserInput) {
    return this.premiumUsersService.create(createPremiumUserInput);
  }

  @Query(() => [PremiumUser], { name: "premiumUsers" })
  findAll() {
    return this.premiumUsersService.findAll();
  }

  @Query(() => PremiumUser, { name: "premiumUser" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.premiumUsersService.findOne(id);
  }

  @Mutation(() => PremiumUser)
  updatePremiumUser(@Args("updatePremiumUserInput") updatePremiumUserInput: UpdatePremiumUserInput) {
    return this.premiumUsersService.update(updatePremiumUserInput.id, updatePremiumUserInput);
  }

  @Mutation(() => PremiumUser)
  removePremiumUser(@Args("id", { type: () => Int }) id: number) {
    return this.premiumUsersService.remove(id);
  }

}