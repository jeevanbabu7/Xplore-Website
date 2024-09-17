import express from 'express';
import User from '../models/p_e_r_userModel.js';
import bcrypt from 'bcryptjs';

const router = express.Router();


router.post('/register',async (req, res) => {
    const { name, phone, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ message: 'User already exists' });
        }
    
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 12);
    
        // Create new user
        const newUser = new User({
          name,
          phone,
          email,
          password: hashedPassword
        });
    
        await newUser.save();
    
        res.status(201).json({ message: 'Registration successful' });
      } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
});





export default router;
