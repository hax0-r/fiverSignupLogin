const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userModel = require("../Model/userSchema")

const controller = {
    check: (req, res) => {
        res.send("Hello World")
    },

    signup: (req, res) => {
        const { first_name, last_name, email, password, age, gender, ethnicity, religion, seeking_person, country, city, state, language } = req.body

        if (!first_name || !last_name || !email || !password || !age || !gender || !ethnicity || !religion || !seeking_person || !country || !city || !state || !language) {
            res.send("Required field are missing")
            return
        }

        userModel.findOne({ email })
            .then(async (user) => {
                if (user) {
                    res.json({
                        status: false,
                        message: "User already exists"
                    })
                } else {

                    let encryptedPassword = await bcrypt.hash(password, 10)

                    let objToSend = {
                        first_name,
                        last_name,
                        email,
                        password: encryptedPassword,
                        age,
                        gender,
                        ethnicity,
                        religion,
                        seeking_person,
                        country,
                        city,
                        state,
                        language
                    }

                    userModel.create(objToSend)
                        .then(() => {
                            res.json({
                                status: true,
                                message: `Welcome, ${first_name}`
                            })
                        })
                        .catch((err) => {
                            res.status(500).json({
                                status: false,
                                message: "Error creating user"
                            })
                        })
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    status: false,
                    message: "Error checking user"
                })
            })
    },

    login: (req, res) => {
        const { email, password } = req.body

        if (!email || !password) {
            res.send("Required field are missing")
            return
        }

        userModel.findOne({ email })
            .then(async (user) => {
                if (!user) {
                    res.status(404).json({
                        status: false,
                        message: "Email not found"
                    })
                } else {

                    let isPasswordMatch = await bcrypt.compare(password, user.password)

                    if (!isPasswordMatch) {
                        res.status(404).json({
                            status: false,
                            message: "Password is incorrect"
                        })
                    } else {

                        const tokenObj = {
                            ...user
                        }

                        const token = jwt.sign(tokenObj, "isUserLogin")

                        res.status(200).json({
                            status: true,
                            message: "Login successful",
                            token: token
                        })
                    }
                }
            })
            .catch((err) => {
                console.log(err);
                res.status(500).json({
                    status: false,
                    message: "Error checking user"
                })
            })
    }
}

module.exports = controller