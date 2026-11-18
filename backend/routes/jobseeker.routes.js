import express from "express";
import { registerJobSeeker } from "../controller/jobseeker.controller.js";


const router = express.Router();
router.post("/register", registerJobSeeker);

export default router;