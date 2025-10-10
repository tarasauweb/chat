import { Router, Response } from 'express';
import { RequestWithBodySignUp } from '../../types/auth.type';
import { CreateUserModel } from '../../models/CreateUserModel';
import { ValidationError, Result, validationResult } from 'express-validator';
import { signUpValidator } from '../../middlewares/auth.validator';
import { auth_service } from '../../services/auth.service';
export function AuthRouter() {
  const router = Router();

  router.post(
    '/signup',
    signUpValidator,
    async (req: RequestWithBodySignUp<CreateUserModel>, res: Response) => {
      const errors: Result<ValidationError> = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.mapped() });
      }
      try {
        const user: CreateUserModel = {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        };
        const result = await auth_service.create_user(user);
        return res.status(201).send(result);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        return res.status(400).json({ success: false, message: err.message });
      }
    },
  );

  return router;
}
