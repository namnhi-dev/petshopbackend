import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("hihi");
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
