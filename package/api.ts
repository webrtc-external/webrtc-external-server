


import { NextFunction, Response, Request, Router } from 'express';

import cors from 'cors';


const corsConfig = {
    "origin": "*",
    "methods": "OPTIONS,GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "allowedHeaders":['Content-Type'],
    "exposedHeaders":[
      'Origin','Content-Type','Authorization'
    ],
    "optionsSuccessStatus": 204
}


const apiRouter = Router();

apiRouter.use(cors(corsConfig))

apiRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
  res.sendFile('index.html', { root: __dirname + '/../static' });
});

apiRouter.get('/favicon.ico', (req, res) => res.sendStatus(204));

apiRouter.get('/test', async (req: Request, res: Response) => {
  res.send('hello world');
});


apiRouter.get('/health/check', async (req: Request, res: Response) => {
  res.status(200).end('ok');
});


apiRouter.get('/health/ready', async (req: Request, res: Response) => {
  res.status(200).end('ok');
});



export default apiRouter;

  