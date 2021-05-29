import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { createConnection } from './app/database';
import routes from './routes';
import xss from 'xss-clean';
import morgan from 'morgan';

// Express server initialization
const app = express();

// Database connection
createConnection();

// Server middlewares
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(morgan('dev'));

// Server API REST routes
app.use('/api', routes);

export default app;