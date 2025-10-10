import { UserForDBType } from '../types/auth.type';
import { collection } from '../db/mongoDB';
export const auth_repository = {
  async create_user(user: UserForDBType) {
    const result = await collection.insertOne(user);
    return { result: result.acknowledged };
  },
};
