import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { ShopsModule } from './shops/shops.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    DatabaseModule,
    ProductsModule,
    ShopsModule,
    AuthModule,
    CartsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
