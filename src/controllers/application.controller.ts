const _ = require('lodash')
import db from '../model'
let model = ''


class ApplicationController {
  errors: any
 
  constructor(m) {
    console.log(m)
    model = m
  }
  create(req, res, options = {}, callback = null) {
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
 

  findOne(req, res, callback = null) {
    req.getValidationResult().then(function(result) {
      if (result.isEmpty()) {
        return db[model].login(req.body)
      } else {
        res.boom.badRequest('Validation errors', result.mapped())
      }
    })
    .then(appuser => res.status(200).send(appuser))
    .catch(error => res.boom.badRequest(error))

  }

  private model() {
    return db[model]
  }
}

export default ApplicationController
