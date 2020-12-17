import {auth} from './auth'
import db from '../model'

export function verifyJWT_MW(req, res, next) {
  console.log('Headers: ' + JSON.stringify(req.headers, null, 2))
  // if (req.headers && req.headers['x-access-token']) {
  //   auth.verifyJWTToken(req.headers['x-access-token']).findOneUser().then(function (user) {
  //         if (!user) {
  //           req.user = undefined
  //           next()
  //         } else {
  //           req.user = user
  //           next()
  //         }
  //       }).catch(function (err) {
  //         req.user = undefined
  //         next()
  //       })
  //   }).catch((err) => {
  //     res.status(400).json({message: 'Invalid auth token provided.'})
  //   })
  // }else {
  //   req.user = undefined
  //   return res.status(401).json({ success: false , message: 'Unauthorized user!' })
  // }

}
