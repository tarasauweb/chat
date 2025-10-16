import { UserForDBType } from '../types/auth.type';
import { collection } from '../db/mongoDB';
export const auth_repository = {
  async create_user(user: UserForDBType) {
    const result = await collection.insertOne(user);
    const safeResult = {
      id: result.insertedId,
      email: user.email,
      confirm: user.isConfirmed,
      update: user.updatedAt,
      status: result.acknowledged,
    };
    return safeResult;
  },
};
