import { Request } from 'express';

export type RequestWithBodySignUp<T> = Request<object, object, T, object>;
