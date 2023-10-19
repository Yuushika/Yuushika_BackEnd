import { Module } from "@nestjs/common";
import { PremiumUsersService } from "./premium_users.service";
import { PremiumUsersResolver } from "./premium_users.resolver";

@Module({
  providers: [PremiumUsersResolver, PremiumUsersService],
})
export class PremiumUsersModule {}