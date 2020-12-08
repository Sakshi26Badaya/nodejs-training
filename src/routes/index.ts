import { Express, Request, Response } from 'express'
import * as apiRoutes from './api.routes'
import * as express from 'express'
export function initRoutes(app: Express) {
  app.use('api', apiRoutes.initRoutes(app, express.Router()))
 
}
