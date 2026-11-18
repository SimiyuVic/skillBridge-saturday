import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/config.js";
import employerRoutes from "./routes/employer.routes.js";
import jobSeekerRoutes from "./routes/jobseeker.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";

dotenv.config();
//create an instance of express
const app = express();
app.use(express.json());

app.use(cors({
  origin: [
    "http://localhost:5173", ""
  ],
  credentials: true
}));
const MYPORT = process.env.PORT;


//health check
app.use("/api/v1/health", (req, res)=>{
    res.status(200).json({
        success: true,
        message: "Backend running fine"
    });
});

//api routes
app.use("/api/v1/employer", employerRoutes);
app.use("/api/v1/jobseeker", jobSeekerRoutes);
app.use("/api/v1/auth", authRoutes);
 
const startServer = async () => {
  await connectDB();
  app.listen(MYPORT, () => {
    console.log(`Server running on PORT ${MYPORT}`);
  });
};

startServer();
