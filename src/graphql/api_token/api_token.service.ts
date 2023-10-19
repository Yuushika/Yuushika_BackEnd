import { Injectable } from '@nestjs/common';
import { CreateApiTokenInput } from './dto/create-api_token.input';
import { UpdateApiTokenInput } from './dto/update-api_token.input';

@Injectable()
export class ApiTokenService {
  create(createApiTokenInput: CreateApiTokenInput) {
    return 'This action adds a new apiToken';
  }

  findAll() {
    return `This action returns all apiToken`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiToken`;
  }

  update(id: number, updateApiTokenInput: UpdateApiTokenInput) {
    return `This action updates a #${id} apiToken`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiToken`;
  }
}
