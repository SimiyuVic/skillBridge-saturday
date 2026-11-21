import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const authMiddleware = {
    verifyToken: async (req, res, next) => {
        const token = req.cookies.sBridgeSaturday;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "You are not logged In"
            });
        }

        //decode information from the cookie
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        //fetch user details from id decoded from token
        const user = await User.findById(decoded.id);

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "No user found"
            });
        }
        //make user details available to other controllers
        req.user = user;
        next();
    },
    authorizeRole: (role) => {
        return (req, res, next) => {
            if (req.user.role !== role) {
                return res.status(403).json({
                    success: false,
                    message: "Unauthorised access"
                });
            }
            next();
        }
    }
}