import * as winston from 'winston'
import { Express, Request, Response } from 'express'
import * as apiRoutes from './api.routes'
import * as express from 'express'
import { RegistrationController, LoginController} from '../controllers'
import { verifyJWT_MW } from '../config/middlewares'

export function initRoutes(app: Express) {

  const registration = new RegistrationController()
  const login = new LoginController()
  winston.log('info', '--> Initialisations routes')

 // app.all('*', (req: Request, res: Response) => res.boom.notFound())
  //app.use('api', apiRoutes.initRoutes(app, express.Router()))
  app.get('/', (req, res) => res.status(200).send({message: 'Api Server is running!'}))
  app.post('/login', login.login)
  app.post('/signup', registration.signup)
  app.route('*').all(verifyJWT_MW)
  return app
}