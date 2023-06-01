import db from 'model/index';
import {logError, logMessage} from 'utils/loggingUtils';

// updating database modals
db.sequelize.sync({force: true}).then(
  () => {
    logMessage('main()', 'Database resynced');
    process.exit(0);
  },
  error => {
    logError('main()', error);
    process.exit(1);
  },
);
