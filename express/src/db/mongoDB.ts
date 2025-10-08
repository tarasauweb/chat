import { MongoClient } from 'mongodb';
import { SETTINGS } from '../settings';
import { UserForDBType } from 'src/types/auth.type';

const url = SETTINGS.mongoURL;
export const client = new MongoClient(url);
const dbName = 'chat';
const db = client.db(dbName);
export const collection = db.collection<UserForDBType>('users');
