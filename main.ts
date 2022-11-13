

import dotenv from 'dotenv';
import Server from './package/server';


dotenv.config()

import config from 'config';
config.util.loadFileConfigs('./config');


const port = process.env.PORT ? parseInt(process.env.PORT) : 9000;

const server = new Server({});
server.start(port);