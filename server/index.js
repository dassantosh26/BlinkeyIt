/** @format */

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import morgan from "morgan"; //It helps log requests made to the server, providing useful details like HTTP method, URL, status code, and response time.
import helmet from "helmet"; //It is used to enhance the security of application by setting various HTTP headers.Protect  app from several well-known web vulnerabilities, such as cross-site scripting (XSS), clickjacking, and other attacks that rely on manipulating HTTP headers.
import connectDB from "./config/connectDB.js";
import userRouter from "./routes/user.route.js";

const app = express();

//Setting Up Middlewares

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false, //bcz we are using frontend and backend will be in different domain thats why we have to set false
  })
);

const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.json({
    message: "Server is running smoothly",
  });
});

app.use("/api/user", userRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
  });
});
