/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, Get, Param } from '@nestjs/common';
import { generateRandomPassword } from './helpers/generateRandomPassword';

@Controller('password')
export class PasswordController {
  @Get(':length')
  findOne(@Param('length') length: number): string {
    return generateRandomPassword(length);
  }
}
