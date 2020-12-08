import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import * as expressValidator from 'express-validator'
import { json, urlencoded } from 'body-parser'
import { Express } from 'express'
import * as routes from './routes/'


dotenv.config();


//const PORT: number = environment.port || 3000
const PORT: number = Number(process.env.PORT);
// const app: express.Application = express();

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors())


// // Unprotected Get
// app.get('/some-resource', (req, res, next) => {
//   res.json('Hello World')
// })


// app.listen(PORT, function () {
//   console.log(`app listening on port  ${PORT} `);
// });


export class Server {

  private app: Express

  constructor() {
    this.app = express()
    this.app.use(cors({
      optionsSuccessStatus: 200
    }))
    this.app.use(urlencoded({
      extended: true
    }))
    this.app.use(json())
    
    this.app.listen(PORT, () => {
      console.log('Server successfully started at port ', PORT)
    })
    routes.initRoutes(this.app)
  }

  getApp() {
    return this.app
  }
}
new Server()
