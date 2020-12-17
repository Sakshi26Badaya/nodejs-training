
import { RegistrationController, LoginController} from '../controllers'
import { verifyJWT_MW } from '../config/middlewares'

export function initRoutes(app, router) {

  let apiRoute = router
  
  const registration = new RegistrationController()
  const login = new LoginController()
  //apiRoute.get('/', (req, res) => res.status(200).send({message: 'Api Server is running!'}))
  apiRoute.post('/login', login.login)
  apiRoute.post('/signup', registration.signup)

  apiRoute.route('*').all(verifyJWT_MW)
  return apiRoute
}
