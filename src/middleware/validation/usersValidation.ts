import {Request, Response, NextFunction} from 'express';
import Joi from 'joi';
import {validateSchema} from 'middleware/validation/validate';

export const validateUserLogin = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
  });

  validateSchema(schema, req, res, next);
};
