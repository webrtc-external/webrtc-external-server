import express from 'express';
import path from 'path';
import http from 'http';

import { EventEmitter } from 'events';
import config  from 'config';


import apiRouter from './api';
import ws from './websocket';
import model  from './model'

export default class Server extends EventEmitter {
  private app: express.Application;
  private httpServer: http.Server | undefined  = undefined;

  constructor(params: any) {
    //create expressjs application
    super();

    this.app = express();

    //configure application
    this.config();
  }

  public async start(port:number) {
    
    this.httpServer =  this.app.listen(port,'0.0.0.0',() => {
      console.log(`starting listen ==> ${port}`);
    }) 

    ws.attachServer(this.httpServer);

  }

  private config() {
    //add static paths
    this.app.use(express.static('public'));

    this.app.use(express.static('static'));

    // for real ip
    this.app.set('trust proxy', true);

    //mount json form parser
    this.app.use(express.json());

    //mount query string parser
    this.app.use(
      express.urlencoded({
        extended: true,
      }),
    );

    this.app.use(apiRouter);

    // 初始化数据库 
    model.initDatabase();

  }
}