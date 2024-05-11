import validator from "validator";
import userModel from "../models/userModel";
import bcrypt from "bcrypt";
import { generateToken } from "../configs/jwtToken";
const createUser = async (req, res) => {
    const { fullname, email, password } = req.body;
    try {
        let user = await userModel.findOne({ email });

        if (user)
            return res.status(400).json({
                success: false,
                message: "Tài khoản đã tồn tại",
            });

        if (!validator.isEmail(email))
            return res.status(400).json({
                success: false,
                message: "Email không hợp lệ",
            });
        if (!validator.isStrongPassword(password))
            return res
                .status(400)
                .json({ success: false, message: "Password không hợp lệ" });
        const genSalts = await bcrypt.genSalt(10);
        const hasPassword = await bcrypt.hash(password, genSalts);

        user = new userModel({
            fullname,
            phone,
            password: hasPassword,
        });
        await user.save();

        const token = generateToken(user._id);

        res.json({
            success: true,
            message: "Tạo thành công",
            _id: user._id,
            phone: user.phone,
            fullname: user.fullname,
            token,
        });
    } catch (error) {}
};

export { createUser };
