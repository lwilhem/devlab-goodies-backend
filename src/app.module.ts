import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
      entities: [],
      synchronize: true, //TURN TO FALSE IN PRODUCTION
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
