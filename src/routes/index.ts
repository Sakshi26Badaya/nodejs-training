import * as winston from 'winston'
import { Express, Request, Response } from 'express'
import * as apiRoutes from './api.routes'
import * as express from 'express'

export function initRoutes(app: Express) {
  winston.log('info', '--> Initialisations des routes')

 // app.all('*', (req: Request, res: Response) => res.boom.notFound())
  app.use('api', apiRoutes.initRoutes(app, express.Router()))
 
}


