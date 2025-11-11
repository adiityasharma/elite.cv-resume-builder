import express from "express";
import cors from "cors"
import "dotenv/config"
import { connectDB } from "./config/db.js";
import { ApiResponse } from "./utils/ApiResponse.js";
import userRoutes from "./routes/user.routes.js"
import cookieParser from "cookie-parser";


const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors(
  {
    origin: "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"]
  }
))

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())


// user routes
app.use("/api/v1/users", userRoutes)



// error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500
  const message = err.message || "Internal server error";

  return res.status(statusCode).json(
    new ApiResponse(statusCode, message, {})
  )

})


app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port ${PORT}`);
});
