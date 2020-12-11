import * as jwt from 'jsonwebtoken'


export  async function verifyJWTToken(token) {
  return await new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      if (err || !decodedToken) {
        return reject(err)
      }
      resolve(decodedToken)
    })
  })
}


export function createJWToken(payload) {
  return jwt.sign({
    data: payload
  }, process.env.SECRET, {
    expiresIn: 3600,
    algorithm: 'HS256'
  })
}
