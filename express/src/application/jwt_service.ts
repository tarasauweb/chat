import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';
import { SETTINGS } from '../settings';

type AccessPayload = { id: string };
type EmailPayload = { email: string };

export const jwt_service = {
  emailConfirmation(email: string) {
    const token = jwt.sign({ email }, SETTINGS.jwt_secret, { expiresIn: '1h' });
    return { token };
  },
  create_jwt(id: ObjectId) {
    const token = jwt.sign({ id: id.toString() }, SETTINGS.jwt_secret, { expiresIn: '1h' });
    return { token };
  },
  verify_token(token: string): AccessPayload | EmailPayload | null {
    try {
      return jwt.verify(token, SETTINGS.jwt_secret) as AccessPayload | EmailPayload;
    } catch {
      return null;
    }
  },
};
