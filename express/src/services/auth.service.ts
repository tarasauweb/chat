import { ObjectId } from 'mongodb';
import { UserForDBType } from '../types/auth.type';
import { CreateUserModel } from '../models/CreateUserModel';
import bcryptjs from 'bcryptjs';
import { auth_repository } from '../repositories/auth.repository';
import { nodemailer_service } from '../application/nodemailer_service';
import { jwt_service } from '../application/jwt_service';
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
    const token = jwt_service.emailConfirmation(result.email);
    await nodemailer_service.sendConfirmationEmail(result.email, token);
    return {
      ...result,
      message: 'User is created. Check your email.',
    };
  },

  async _generateHash(password: string) {
    const salt = await bcryptjs.genSalt(this.defaultSalt);
    const hash = await bcryptjs.hash(password, salt);
    return hash;
  },
};
