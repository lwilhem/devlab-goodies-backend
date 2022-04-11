import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';
import { ShopEntity } from './shops/entities/shop.entity';
import { ShopsModule } from './shops/shops.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [ProductEntity, ShopEntity],
      synchronize: true, //TURN TO FALSE IN PRODUCTION
    }),
    ShopsModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
