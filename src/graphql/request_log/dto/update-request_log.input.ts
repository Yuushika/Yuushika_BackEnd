import { CreateRequestLogInput } from './create-request_log.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRequestLogInput extends PartialType(CreateRequestLogInput) {
  @Field(() => Int)
  id: number;
}
