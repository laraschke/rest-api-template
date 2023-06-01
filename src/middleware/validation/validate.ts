import {Request, Response, NextFunction} from 'express';
import Joi, {Schema} from 'joi';

export const validateSchema = (schema: Schema, req: Request, res: Response, next: NextFunction) => {
  const {error} = schema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  next();
};

export const validateAddress = (req: Request, res: Response, next: NextFunction) => {
  const schema = Joi.object({
    address: Joi.string().hex().min(40).max(40).required(),
  });
  validateSchema(schema, req, res, next);
};
