import {Response} from 'express';
import {RequestBody} from 'types/types';

// TEST ONLY
export const loginUser = async (req: RequestBody<{email: string}>, res: Response<string | unknown>) => {
  try {
    console.log('get user');
  } catch (error) {
    console.log(error);
    return res.status(400).send(error);
  }
};
