const jwt = require("jsonwebtoken")

const middleware = {
    AUTH_MIDDLEWARE: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1]
            const isUserLogin = jwt.verify(token, "isUserLogin")
            if (isUserLogin._doc) {
                next()
            }
        } catch (error) {
            res.status(401).json({ message: "Unauthorized" })
        }
    }
}

module.exports = middleware