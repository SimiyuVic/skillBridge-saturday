import express from "express";
import { loginUsers } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/login", loginUsers);
export default router;