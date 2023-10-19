import { Module } from '@nestjs/common';
import { CustomGuildAssistService } from './custom_guild_assist.service';
import { CustomGuildAssistResolver } from './custom_guild_assist.resolver';

@Module({
  providers: [CustomGuildAssistResolver, CustomGuildAssistService],
})
export class CustomGuildAssistModule {}
