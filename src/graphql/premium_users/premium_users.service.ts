import { Injectable } from '@nestjs/common';
import { CreatePremiumUserInput } from './dto/create-premium_user.input';
import { UpdatePremiumUserInput } from './dto/update-premium_user.input';

@Injectable()
export class PremiumUsersService {
  create(createPremiumUserInput: CreatePremiumUserInput) {
    return 'This action adds a new premiumUser';
  }

  findAll() {
    return `This action returns all premiumUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} premiumUser`;
  }

  update(id: number, updatePremiumUserInput: UpdatePremiumUserInput) {
    return `This action updates a #${id} premiumUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} premiumUser`;
  }
}
