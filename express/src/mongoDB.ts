import { MongoClient } from 'mongodb';
import { SETTINGS } from './settings';

const url = SETTINGS.mongoURL;
export const client = new MongoClient(url);
const dbName = 'chat';
const db = client.db(dbName);
export const collection = db.collection('users');
