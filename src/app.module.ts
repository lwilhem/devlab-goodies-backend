import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [ConfigModule.forRoot(), AuthModule, CustomersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
