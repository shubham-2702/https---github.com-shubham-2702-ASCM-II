const express = require('express')
const router = express.Router()
const farmer = require('../models/farmer')
const bcrypt = require('bcryptjs')

router.post('/', (req, res, next) => {
  console.log(req.body)

  farmer.findOne({email: req.body.email})
    .then(doc => {
      if(doc){
        res.status(400).send({err: "User already registered"})
        
      }else{
        const password = bcrypt.hashSync(req.body.password, 10)
        new farmer({
          name: req.body.name,
          email: req.body.email,
          contactNumber: req.body.contactNumber,
          address: req.body.address,
          password
        }).save()
          .then(result => {
            res.status(201).json({msg: "Account created successfully"})
          })
          .catch(err => {
            res.status(500).json({err})
          })
      }
    })
})

module.exports = router