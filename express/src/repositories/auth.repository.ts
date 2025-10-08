import { UserForDBType } from '../types/auth.type';
import { collection } from '../db/mongoDB';
export const auth_repository = {
  async create_user(user: UserForDBType) {
    const result = await collection.insertOne(user);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { hash, ...safeUser } = user;
    return { ...safeUser, _id: result.insertedId };
  },
};
