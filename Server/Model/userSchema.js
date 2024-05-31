const mongoose = require("mongoose")
const schema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    ethnicity: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    seeking_person: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    created_on: {
        type: Date,
        default: Date.now()
    }
})

const userModel = mongoose.model("users", schema)
module.exports = userModel