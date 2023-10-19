import { Module } from '@nestjs/common';
import { RequestLogService } from './request_log.service';
import { RequestLogResolver } from './request_log.resolver';

@Module({
  providers: [RequestLogResolver, RequestLogService],
})
export class RequestLogModule {}
