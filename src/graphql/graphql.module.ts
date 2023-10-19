import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PremiumUsersModule } from './premium_users/premium_users.module';
import { ThemeDetectionLogModule } from './theme_detection_log/theme_detection_log.module';
import { RequestLogModule } from './request_log/request_log.module';
import { ConversationLogModule } from './conversation_log/conversation_log.module';
import { ApiTokenModule } from './api_token/api_token.module';
import { GuildModule } from './guild/guild.module';
import { PremiumGuildModule } from './premium_guild/premium_guild.module';
import { CustomGuildAssistModule } from './custom_guild_assist/custom_guild_assist.module';

@Module({
  imports: [
    UsersModule,
    PremiumUsersModule,
    ThemeDetectionLogModule,
    RequestLogModule,
    ConversationLogModule,
    ApiTokenModule,
    GuildModule,
    PremiumGuildModule,
    CustomGuildAssistModule,
  ],
})
export class GraphqlModule {}
