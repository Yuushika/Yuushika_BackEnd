import { CreateThemeDetectionLogInput } from './create-theme_detection_log.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateThemeDetectionLogInput extends PartialType(CreateThemeDetectionLogInput) {
  @Field(() => Int)
  id: number;
}
