const _ = require('lodash')
import db from '../model'
let model = ''


class ApplicationController {
  errors: any
 
  constructor(m) {
    console.log(m)
    model = m
  }
  create(req, res, next) {
    req.getValidationResult()
    .then(function(result) {
      if (result.isEmpty()) {
        return db[model].create(req.body)
          .then(appuser => res.status(201).send(appuser))
          .catch(error => res.boom.badRequest(error))
      } else {
        res.boom.badRequest('Validation errors', result.mapped())
      }
    })
  }
 

  async findOne(req, res, next) {
   await req.getValidationResult().then(function(result) {
      if (result.isEmpty()) {
        return db[model].login(req.body)
      } else {
        res.boom.badRequest('Validation errors', result.mapped())
      }
     
    })
    .catch(error => res.boom.badRequest(error))
    next();
    
  }

  private model() {
    return db[model]
  }
}

export default ApplicationController
