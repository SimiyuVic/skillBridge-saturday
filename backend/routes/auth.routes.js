import express from "express";
import { 
    checkCookie, 
    fetchUserDetails, 
    loginUsers, 
    logoutUser} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

//login users
router.post("/login", loginUsers);

//check cookie
router.get("/check-cookie", checkCookie);

//fetch user details
router.get("/user-details", 
    authMiddleware.verifyToken,
    fetchUserDetails);

//log out
router.post("/logout", logoutUser);

export default router;