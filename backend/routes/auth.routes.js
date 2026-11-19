import express from "express";
import { checkCookie, fetchUserDetails, loginUsers } from "../controller/auth.controller.js";

const router = express.Router();

//login users
router.post("/login", loginUsers);

//check cookie
router.get("/check-cookie", checkCookie);

//fetch user details
router.get("/user-details", fetchUserDetails);

export default router;