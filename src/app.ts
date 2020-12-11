import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import * as boom from 'express-boom'
import { json, urlencoded } from 'body-parser'
import { Express } from 'express'
import * as routes from './routes/';
import * as winston from 'winston'


dotenv.config();

const PORT: number = Number(process.env.PORT);


export class Server {

  private app: Express

  constructor() {
    this.app = express()
    //this.app.use(boom())
    this.app.use(cors({
      optionsSuccessStatus: 200
    }))
    this.app.use(urlencoded({
      extended: true
    }))
    this.app.use(json())
    
    
      this.app.listen(PORT, () => {
        winston.log('info', '--> Server successfully started at port', PORT)
      })
    
    routes.initRoutes(this.app)
  }

  getApp() {
    return this.app
  }
}
new Server()
