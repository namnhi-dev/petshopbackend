import mongoose from "mongoose";

const DbConnect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected Successfully");
    } catch (error) {
        console.log("NOT Connected");
    }
};
export default DbConnect;
