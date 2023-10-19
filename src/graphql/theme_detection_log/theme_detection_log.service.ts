import { Injectable } from "@nestjs/common";
import type { CreateThemeDetectionLogInput } from "./dto/create-theme_detection_log.input";
import type { UpdateThemeDetectionLogInput } from "./dto/update-theme_detection_log.input";

@Injectable()
export class ThemeDetectionLogService {

  create(createThemeDetectionLogInput: CreateThemeDetectionLogInput) {
    return "This action adds a new themeDetectionLog";
  }

  findAll() {
    return "This action returns all themeDetectionLog";
  }

  findOne(id: number) {
    return `This action returns a #${id} themeDetectionLog`;
  }

  update(id: number, updateThemeDetectionLogInput: UpdateThemeDetectionLogInput) {
    return `This action updates a #${id} themeDetectionLog`;
  }

  remove(id: number) {
    return `This action removes a #${id} themeDetectionLog`;
  }

}