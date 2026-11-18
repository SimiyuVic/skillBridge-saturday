import express from "express";
import { registerEmployer } from "../controller/employer.controller.js";

const router = express.Router();
//register
router.post("/register", registerEmployer);

export default router;