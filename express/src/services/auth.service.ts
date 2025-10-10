import { ObjectId } from 'mongodb';
import { UserForDBType } from '../types/auth.type';
import { CreateUserModel } from '../models/CreateUserModel';
import bcryptjs from 'bcryptjs';
import { auth_repository } from '../repositories/auth.repository';

export const auth_service = {
  defaultSalt: 10,
  async create_user(user: CreateUserModel) {
    const { name, email, password } = user;
    const hash = await this._generateHash(password);
    const newUser: UserForDBType = {
      _id: new ObjectId(),
      name,
      email,
      settings: {
        theme: 'light',
        notifications: true,
        sound: true,
        showLastSeen: true,
      },
      isConfirmed: false,
      passwordHash: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const result = await auth_repository.create_user(newUser);
    return {
      ...result,
      id: newUser._id.toString(),
      email: newUser.email,
      createdAt: newUser.createdAt.toISOString(),
      message: 'User is created. Check your email.',
    };
  },

  async _generateHash(password: string) {
    const salt = await bcryptjs.genSalt(this.defaultSalt);
    const hash = await bcryptjs.hash(password, salt);
    return hash;
  },
};
