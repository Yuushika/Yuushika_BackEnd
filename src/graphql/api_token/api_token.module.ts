import { Module } from '@nestjs/common';
import { ApiTokenService } from './api_token.service';
import { ApiTokenResolver } from './api_token.resolver';

@Module({
  providers: [ApiTokenResolver, ApiTokenService],
})
export class ApiTokenModule {}
