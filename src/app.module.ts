import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Auth2Module } from './auth2/auth2.module';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './products/products.module';
import { ShopsModule } from './shops/shops.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    DatabaseModule,
    ProductsModule,
    ShopsModule,
    Auth2Module,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
