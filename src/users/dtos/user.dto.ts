import { IsArray, IsEmail, IsNotEmpty } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsArray()
  friends: [];
}
