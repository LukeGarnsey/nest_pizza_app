import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { PizzaModule } from './pizza/pizza.module';
import { ToppingModule } from './topping/topping.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}), 
    AuthModule, UserModule, PizzaModule, 
    ToppingModule, PrismaModule],
})
export class AppModule {}
