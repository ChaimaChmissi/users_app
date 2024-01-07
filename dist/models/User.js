"use strict";
const mongoose = require("mongoose");
// Define the user schema
let userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String, // Assuming you store the image path or URL as a string
    },
    role: {
        type: String,
        enum: ["admin", "employee"],
        default: "employee", // Set a default role if not provided
    },
});
// Create a User model based on the schema
const User = mongoose.model("User", userSchema);
module.exports = User;
