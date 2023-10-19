import { Injectable } from "@nestjs/common";
import type { CreateRequestLogInput } from "./dto/create-request_log.input";
import type { UpdateRequestLogInput } from "./dto/update-request_log.input";

@Injectable()
export class RequestLogService {

  create(createRequestLogInput: CreateRequestLogInput) {
    return "This action adds a new requestLog";
  }

  findAll() {
    return "This action returns all requestLog";
  }

  findOne(id: number) {
    return `This action returns a #${id} requestLog`;
  }

  update(id: number, updateRequestLogInput: UpdateRequestLogInput) {
    return `This action updates a #${id} requestLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} requestLog`;
  }

}