import { Router } from 'express';
import { RequestWithBodySignUp } from './auth.type';
import { CreateUserModel } from './CreateUserModel';
import { ValidationError, Result, validationResult } from 'express-validator';
import { signUpValidator } from './auth.validator';
export function AuthRouter() {
  const router = Router();

  router.post(
    '/signup',
    signUpValidator,
    async (req: RequestWithBodySignUp<CreateUserModel>, res) => {
      const errors: Result<ValidationError> = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
      }
      try {
        return res.status(200).json();
      } catch (err: any) {
        return res.status(400).json({ success: false, message: err.message });
      }
    },
  );

  return router;
}
