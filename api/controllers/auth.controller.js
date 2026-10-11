import User from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {
    const {username,email,password}=req.body;
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser =new User({username,email,password: hashedPassword});
    try {
        await newUser.save();

        res.status(201).json({
            message: 'Signup received successfully',
            data: req.body
        });
    } catch (error) {
    next(errorHandler(500, error.message));
}
};
