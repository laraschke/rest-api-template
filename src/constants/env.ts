import {IEnvProperties} from 'constants/types';
import * as dotenv from 'dotenv';
dotenv.config();

const exitWithErrorMessage = (errorMessage: string): never => {
  console.error(errorMessage);
  process.exit(1);
};

const getEnvString = (property: IEnvProperties): string => {
  const value = process.env[property];
  if (value === undefined) {
    return exitWithErrorMessage(`Environment variable ${property} is undefined`);
  }
  return value;
};

const getEnvNumber = (property: IEnvProperties): number => {
  const value = process.env[property];
  if (value === undefined) {
    return exitWithErrorMessage(`Environment variable ${property} is undefined`);
  }
  const numberValue = Number(value);
  if (!Number.isFinite(numberValue)) {
    return exitWithErrorMessage(`Environment variable ${property} is not a number`);
  }
  return numberValue;
};

const getEnvBoolean = (property: IEnvProperties, defaultValue?: boolean): boolean => {
  const value = process.env[`${property}`];
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${property} is undefined`);
  }
  switch (value.toLowerCase()) {
    case 'true':
    case '1':
      return true;
    case 'false':
    case '0':
      return false;
  }
  throw new Error(`Environment variable ${property} is not a boolean value`);
};

// get environment variables
export const HOST = getEnvString('HOST');
export const PORT = getEnvNumber('PORT');
export const DB_HOST = getEnvString('DB_HOST');
export const DB_PORT = getEnvNumber('DB_PORT');
export const DB_USER = getEnvString('DB_USER');
export const DB_PASSWORD = getEnvString('DB_PASSWORD');
export const DB_NAME = getEnvString('DB_NAME');
