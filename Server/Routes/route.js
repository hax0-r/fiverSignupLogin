const express = require("express")
const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const userModel = require("../Model/userSchema")
const middleware = require("../Middleware/authMiddleware")
const controller = require("../Controllers/controller")

const route = express.Router()


route.get("/check", middleware.AUTH_MIDDLEWARE, controller.check)

route.post("/signup", controller.signup)


route.post("/login", controller.login)



module.exports = route