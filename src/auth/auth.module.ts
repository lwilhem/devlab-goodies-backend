import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { AuthService } from './service/auth.service';

@Module({
  imports: [DatabaseModule],
})
export class AuthModule {
  constructor(private readonly authService: AuthService) {}
}
