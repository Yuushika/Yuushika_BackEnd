import { Module } from "@nestjs/common";
import { PremiumGuildService } from "./premium_guild.service";
import { PremiumGuildResolver } from "./premium_guild.resolver";

@Module({
  providers: [PremiumGuildResolver, PremiumGuildService],
})
export class PremiumGuildModule {}