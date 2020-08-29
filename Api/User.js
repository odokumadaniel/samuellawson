const express = require('express')
const mongoose = require('mongoose')
const User = require('../DB/User')
const route = express.route()

route.post('/', async(req, res)=>{
const {firstname,lastname} = req.body
let user = {}
user.firstname = firstname
user.lastname = lastname
let userMOdel = new User(user)
await userMOdel.save();
res.json(userMOdel)

})



