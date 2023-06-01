import {Sequelize} from 'sequelize';
import user from './userModel';
import {logError, logMessage} from 'utils/loggingUtils';
import {DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER} from 'constants/env';

// define database connection
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
  dialect: 'postgres',
});

// define database models
const userModel = user(sequelize);

// check database connection
sequelize
  .authenticate()
  .then(() => {
    logMessage('model/index.ts', 'Connection to database has been established successfully.');
  })
  .catch(err => {
    logError('model/index.ts', 'Unable to connect to the database:');
    logError('model/index.ts', err);
  });

export default {
  Sequelize: Sequelize,
  sequelize: sequelize,
  users: userModel,
};
