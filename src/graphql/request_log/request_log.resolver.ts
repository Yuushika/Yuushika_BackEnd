import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RequestLogService } from './request_log.service';
import { RequestLog } from './entities/request_log.entity';
import { CreateRequestLogInput } from './dto/create-request_log.input';
import { UpdateRequestLogInput } from './dto/update-request_log.input';

@Resolver(() => RequestLog)
export class RequestLogResolver {
  constructor(private readonly requestLogService: RequestLogService) {}

  @Mutation(() => RequestLog)
  createRequestLog(@Args('createRequestLogInput') createRequestLogInput: CreateRequestLogInput) {
    return this.requestLogService.create(createRequestLogInput);
  }

  @Query(() => [RequestLog], { name: 'requestLog' })
  findAll() {
    return this.requestLogService.findAll();
  }

  @Query(() => RequestLog, { name: 'requestLog' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.requestLogService.findOne(id);
  }

  @Mutation(() => RequestLog)
  updateRequestLog(@Args('updateRequestLogInput') updateRequestLogInput: UpdateRequestLogInput) {
    return this.requestLogService.update(updateRequestLogInput.id, updateRequestLogInput);
  }

  @Mutation(() => RequestLog)
  removeRequestLog(@Args('id', { type: () => Int }) id: number) {
    return this.requestLogService.remove(id);
  }
}
