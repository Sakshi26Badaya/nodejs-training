import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import * as boom from 'express-boom'
import { json, urlencoded } from 'body-parser'
import { Express } from 'express'
import * as routes from './routes/';
import * as winston from 'winston'
import * as swaggerUi from 'swagger-ui-express';
import * as yaml from 'yamljs';

dotenv.config();
const swaggerDocument: any = yaml.load('./swagger.yaml');
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
    this.app.use(express.json())
    //routes.initRoutes(this.app)
    this.app.use("/", routes.initRoutes);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    
      this.app.listen(PORT, () => {
        winston.log('info', '--> Server successfully started at port', PORT)
      })
    
   
  }

  getApp() {
    return this.app
  }
}
new Server()
