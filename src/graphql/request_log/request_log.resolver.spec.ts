import { Test, TestingModule } from '@nestjs/testing';
import { RequestLogResolver } from './request_log.resolver';
import { RequestLogService } from './request_log.service';

describe('RequestLogResolver', () => {
  let resolver: RequestLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestLogResolver, RequestLogService],
    }).compile();

    resolver = module.get<RequestLogResolver>(RequestLogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
