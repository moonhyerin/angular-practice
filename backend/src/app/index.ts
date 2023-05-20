import * as express from 'express';
import * as bodyParser from 'body-parser';

import DBConnector from './db-connector';
import Config from './config';
import * as Api from './api';

const app = express();

const connectDatabases = async () => {
  await DBConnector.connectMongo(Config.MONGO_URL + Config.FASHION_CLOUD_DB);
};

const addBodyParser = async () => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

const router = express.Router();
const useApi = async () => {
  router.get('/api/products', Api.getProducts);
  app.use(router);
};

const listenPort = (PORT) => {
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
};

async function start() {
  await connectDatabases();
  await addBodyParser();
  await useApi();
  await listenPort(Config.SERVICE_PORT);
}

export default {
  start,
};
