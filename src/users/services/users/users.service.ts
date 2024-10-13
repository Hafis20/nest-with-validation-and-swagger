import { Injectable } from '@nestjs/common';
import { createUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUsersDB = [
    { username: 'Hafis', email: 'hafis@gmail.com' },
    { username: 'Unni', email: 'unni@hotmail.com' },
  ];

  // Get user from db
  getUser() {
    try {
      return this.fakeUsersDB;
    } catch (error) {
      throw new Error(error);
    }
  }

  // Create a user in db
  createUser(userData: createUserType) {
    try {
      this.fakeUsersDB.push(userData);
      return { created: 'OK' };
    } catch (error) {
      throw new Error(error);
    }
  }

  // Get User By id
  getUserById(userId: number) {
    try {
      return { userId, username: 'Hafis', email: 'abc@gmail.com' };
    } catch (error) {
      throw new Error(error);
    }
  }
}
