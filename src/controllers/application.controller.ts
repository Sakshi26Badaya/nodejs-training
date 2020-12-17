
import db from '../model'
import User from '../model/user.model'
const { body, validationResult } = require('express-validator');
let model = ''


class ApplicationController {
 
 
  constructor(m) {
    console.log(m)
    model = m
  }
 async createNewUser(req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  
   await User.create({
      firstName:req.body.firstName,
      lastName:req.body.lastname,
      email: req.body.email,
      password: req.body.password
    }).then(user => res.json(user));

  }
    // req.getValidationResult()
    // .then(function(result) {
    //   if (result.isEmpty()) {
    //     return db[model].create(req.body)
    //       .then(user => res.status(201).send(user))
    //       .catch(error => res.boom.badRequest(error))
    //   } else {
    //     res.boom.badRequest('Validation errors', result.mapped())
    //   }
    // })

  async findOneUser(req, res, next) {
   await req.getValidationResult().then(function(result) {
      if (result.isEmpty()) {
        return db[model].login(req.body)
      } else {
        res.boom.badRequest('Validation errors', result.mapped())
      }
     
    })
    .catch(error => res.boom.badRequest(error))
    
  }

  private model() {
    return db[model]
  }
}

export default ApplicationController
