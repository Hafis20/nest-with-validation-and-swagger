import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/user.dto';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { username: 'Hafis', email: 'hafis@gmail.com' };
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: createUserDto) {
    console.log(userData);
    return {};
  }
}
