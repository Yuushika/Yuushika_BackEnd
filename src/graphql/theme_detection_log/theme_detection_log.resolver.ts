import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { ThemeDetectionLogService } from "./theme_detection_log.service";
import { ThemeDetectionLog } from "./entities/theme_detection_log.entity";
import { CreateThemeDetectionLogInput } from "./dto/create-theme_detection_log.input";
import { UpdateThemeDetectionLogInput } from "./dto/update-theme_detection_log.input";

@Resolver(() => ThemeDetectionLog)
export class ThemeDetectionLogResolver {

  constructor(private readonly themeDetectionLogService: ThemeDetectionLogService) {}

  @Mutation(() => ThemeDetectionLog)
  createThemeDetectionLog(@Args("createThemeDetectionLogInput") createThemeDetectionLogInput: CreateThemeDetectionLogInput) {
    return this.themeDetectionLogService.create(createThemeDetectionLogInput);
  }

  @Query(() => [ThemeDetectionLog], { name: "themeDetectionLog" })
  findAll() {
    return this.themeDetectionLogService.findAll();
  }

  @Query(() => ThemeDetectionLog, { name: "themeDetectionLog" })
  findOne(@Args("id", { type: () => Int }) id: number) {
    return this.themeDetectionLogService.findOne(id);
  }

  @Mutation(() => ThemeDetectionLog)
  updateThemeDetectionLog(@Args("updateThemeDetectionLogInput") updateThemeDetectionLogInput: UpdateThemeDetectionLogInput) {
    return this.themeDetectionLogService.update(updateThemeDetectionLogInput.id, updateThemeDetectionLogInput);
  }

  @Mutation(() => ThemeDetectionLog)
  removeThemeDetectionLog(@Args("id", { type: () => Int }) id: number) {
    return this.themeDetectionLogService.remove(id);
  }

}