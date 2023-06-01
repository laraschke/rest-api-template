import {HOST, PORT} from 'constants/env';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import {routes} from 'routes';
import {logError, logMessage} from 'utils/loggingUtils';

const main = async () => {
  try {
    const app = express();

    // define middleware
    app.use(helmet());
    app.use(morgan('tiny'));
    app.use(cors());
    app.use(express.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded
    app.use(express.json()); // for parsing application/json

    // start server and serve routes
    app.use('/api/v1', routes);
    app.listen(PORT, HOST, () => logMessage('main()', `Server running on ${HOST}:${PORT}`));
  } catch (e) {
    logError('main()', e);
    process.exit(1);
  }
};

main();
