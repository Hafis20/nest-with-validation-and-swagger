import { HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { Param } from '@nestjs/common';
import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dtos/user.dto';
import { UsersService } from 'src/users/services/users/users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    try {
      let res = this.userService.getUser();
      return res;
    } catch (error) {
      return new Error(error);
    }
  }

  @Post()
  @UsePipes(new ValidationPipe())
  // Create user dto contains so many data But I have to send only few
  createUser(@Body() userData: CreateUserDto) {
    try {
      return this.userService.createUser(userData);
    } catch (error) {
      return new Error(error);
    }
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    try {
      const user = this.userService.getUserById(id);
      if (!user) {
        return new HttpException('User not Found', HttpStatus.BAD_REQUEST);
      }
      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
