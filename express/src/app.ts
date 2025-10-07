import { Express } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const cors = require('cors');
import { AuthRouter } from './modules/auth/auth.routes';

export const app: Express = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter());
