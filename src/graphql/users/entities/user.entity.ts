import {ObjectType, Field, Int, ID} from '@nestjs/graphql';
import {PrivacyLevel, Model} from '@prisma/client'
import {PremiumUser} from "../../premium_users/entities/premium_user.entity";

@ObjectType()
export class User {
  @Field(type => ID)
  id: string;

  @Field()
  registerAt: Date;

  @Field(type => PrivacyLevel, {
    defaultValue: 'ALL_SAVES',

  })
  privacy: PrivacyLevel;

  @Field({
    defaultValue: false,
  })
  premium: boolean;

  @Field(type => Int, {
    defaultValue: 0
  })
  dailyUsage: number;

  @Field(type => Int, {
    defaultValue: 0
  })
  monthlyUsage: number;

  @Field()
  lastUsage: Date;

  @Field(type => Int)
  coins: number;

  @Field(type => Model, {
    defaultValue: 'GPT35'
  })
  prefModel: Model;

  @Field({
    nullable: true
  })
  language?: string;

  @Field({
    nullable: true
  })
  premiumUser?: PremiumUser;
}
