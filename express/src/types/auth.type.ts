import { Request } from 'express';
import { ObjectId } from 'mongodb';

export type RequestWithBodySignUp<T> = Request<object, object, T, object>;
export type UserForDBType = {
  _id: ObjectId;
  name: string;
  email: string;
  passwordHash: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  isConfirmed: boolean;
  settings?: {
    theme: 'light' | 'dark';
    notifications: boolean;
    sound: boolean;
    showLastSeen: boolean;
  };
  lastSeen?: Date;
};
export type ResponseAfterAuthType = {
  _id: string;
  name: string;
  email: string;
  avatarUrl?: string | null;
  createdAt: string;
  settings: {
    theme: 'light' | 'dark';
    notifications: boolean;
    sound: boolean;
    showLastSeen: boolean;
  };
  lastSeen?: string;
  accessToken: string;
  refreshToken: string;
};
