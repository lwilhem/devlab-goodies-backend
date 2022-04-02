import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { CustomersModule } from './customers/customers.module';
import { CustomerEntity } from './customers/entities/customer.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'devlab-db',
      entities: [CustomerEntity],
      synchronize: true, //TURN TO FALSE IN PRODUCTION
    }),
    AuthModule,
    CustomersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
