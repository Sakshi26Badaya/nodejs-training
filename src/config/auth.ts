import * as jwt from 'jsonwebtoken'

export class auth {
// export  async function verifyJWTToken(token: string) {
//   return await new Promise((resolve, reject) => {
//     jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
//       if (err || !decodedToken) {
//         return reject(err)
//       }
//       resolve(decodedToken)
//     })
//   })
// }
static verifyJWTToken(token: string) {
  try {
    const isVerified = jwt.verify(token, process.env.SECRET);
    return isVerified;
  } catch (error) {
    throw (error.message)
  }
}

// export function createJWToken(payload) {
//   return jwt.sign({
//     data: payload
//   }, process.env.SECRET, {
//     expiresIn: 3600,
//     algorithm: 'HS256'
//   })
// }
static createJWTToken(payload: any,options?: any) {
  try {
    const token = jwt.sign(payload, process.env.SECRET, {
      expiresIn: options && options.expireIn ? options.expireIn : "24h",
    });

    return token;
  } catch (error) {
    throw (error.message)
  }
}
}