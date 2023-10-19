import { Injectable } from "@nestjs/common";
import type { CreatePremiumGuildInput } from "./dto/create-premium_guild.input";
import type { UpdatePremiumGuildInput } from "./dto/update-premium_guild.input";

@Injectable()
export class PremiumGuildService {

  create(createPremiumGuildInput: CreatePremiumGuildInput) {
    return "This action adds a new premiumGuild";
  }

  findAll() {
    return "This action returns all premiumGuild";
  }

  findOne(id: number) {
    return `This action returns a #${id} premiumGuild`;
  }

  update(id: number, updatePremiumGuildInput: UpdatePremiumGuildInput) {
    return `This action updates a #${id} premiumGuild`;
  }

  remove(id: number) {
    return `This action removes a #${id} premiumGuild`;
  }

}