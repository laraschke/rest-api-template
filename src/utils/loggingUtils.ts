export const sleep = (ms: number): Promise<unknown> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const logMessage = (where: string, message: string): void => {
  console.log(`${new Date().toISOString()} ${where}: ${message}`);
};

const hasOwnProperty = <X, Y extends PropertyKey>(obj: X, prop: Y): obj is X & Record<Y, unknown> =>
  Object.prototype.hasOwnProperty.call(obj, prop);

export const errorToString = (error: unknown): string => {
  if (typeof error === 'string') {
    return error;
  }
  if (typeof error === 'number' || typeof error === 'bigint' || typeof error === 'boolean') {
    return error.toString();
  }
  if (typeof error === 'object' && error && error.toString() !== '[object Object]') {
    return error.toString();
  }
  if (typeof error === 'object' && error && hasOwnProperty(error, 'message') && typeof error.message === 'string') {
    return error.message;
  }
  if (typeof error === 'object') {
    return JSON.stringify(error);
  }
  return `${error}`;
};

export const logError = (where: string, error: unknown): void => {
  console.error(`ERROR ${new Date().toISOString()} ${where}: ${errorToString(error)}`);
};
