import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const registerJobSeeker = async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;

    //form validation
    if (!fullname || !email || !phone || !password) {
      return res.status(400).json({ 
        success: false,
        message: "All fields required",
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    //check if user already exists
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User with this email already exists",
      });
    }

    //check if phone already exists
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res.status(409).json({
        success: false,
        message: "Phone number already taken",
      });
    }

    //hashing the password
    const hashedPassword = await bcrypt.hash(password, 12);

    //save the employer
    const jobSeeker = new User({
      fullname,
      email: normalizedEmail,
      phone,
      password: hashedPassword,
      role: "jobseeker",
    });

    await jobSeeker.save(); //permanently save the employer data.

    return res.status(201).json({
      success: true,
      message: `User with name ${fullname} created`,
    });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
