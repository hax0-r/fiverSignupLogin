const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const route = require("./Routes/route")
const app = express()

app.use(cors())
app.use(express.json())

const BASE_URL = "mongodb+srv://talha185133:StCKt4Fi5qk4T8h5@cluster0.nvzkt0f.mongodb.net/omagle"

mongoose.connect(BASE_URL)
    .then(() => {
        console.log("Database Connected")
    })
    .catch((err) => {
        console.log(err)
    })


app.use("/api", route)

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
