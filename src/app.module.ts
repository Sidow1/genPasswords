import { PasswordController } from './password/password.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [PasswordController, AppController],
  providers: [AppService],
})
export class AppModule {}
