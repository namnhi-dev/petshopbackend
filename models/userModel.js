import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
    {
        fullname: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
            required: true,
        },
        phone: {
            type: String,
            unique: true,
        },
        avatar: {
            type: String,
        },
        password: {
            type: String,
        },
        role: {
            type: String,
            default: "user",
            enum: ["admin", "user"],
        },
        cart: {
            type: Array,
            default: [],
        },
        birthday: {
            type: String,
        },
        gender: {
            type: String,
        },
        orders: {
            type: Array,
            default: [],
        },
        refreshToken: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const userModel = mongoose.model("User", userSchema);
export default userModel;
