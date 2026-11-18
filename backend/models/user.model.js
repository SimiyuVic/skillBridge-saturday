import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true, 
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    location: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "employer", "jobseeker"],
        default: "jobseeker"
    }

}, {timestamps: true});

const User = mongoose.model("User", userSchema); //users
export default User;