import { Injectable } from '@nestjs/common';
import { CreateCustomGuildAssistInput } from './dto/create-custom_guild_assist.input';
import { UpdateCustomGuildAssistInput } from './dto/update-custom_guild_assist.input';

@Injectable()
export class CustomGuildAssistService {
  create(createCustomGuildAssistInput: CreateCustomGuildAssistInput) {
    return 'This action adds a new customGuildAssist';
  }

  findAll() {
    return `This action returns all customGuildAssist`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customGuildAssist`;
  }

  update(id: number, updateCustomGuildAssistInput: UpdateCustomGuildAssistInput) {
    return `This action updates a #${id} customGuildAssist`;
  }

  remove(id: number) {
    return `This action removes a #${id} customGuildAssist`;
  }
}
