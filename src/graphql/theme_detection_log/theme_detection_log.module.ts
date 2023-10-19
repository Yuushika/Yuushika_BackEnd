import { Module } from '@nestjs/common';
import { ThemeDetectionLogService } from './theme_detection_log.service';
import { ThemeDetectionLogResolver } from './theme_detection_log.resolver';

@Module({
  providers: [ThemeDetectionLogResolver, ThemeDetectionLogService],
})
export class ThemeDetectionLogModule {}
