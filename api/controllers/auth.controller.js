import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully");
  } catch (error) {
    next(error);
  }
};


export const signin = async (req, res, next) => { 
  const {email, password} = req.body;
  try {
    // looks for the email in Users saved in mongoDB
    const validUser = await User.findOne({email});
    //throws an error if email is not found
    if (!validUser) return next(errorHandler(404, "User not found"));
    // if email is found, compares the entered password to the password saved under that user
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    // throws error if password does not match up
    if (!validPassword) return next(errorHandler(401, 'Wrong credentials'));
    // creates a cookie session for the user
    const token =jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
    // removes the password from the api call to not be visible (safer api call)
    const {password:passs, ...rest} = validUser._doc
    res.cookie('access_token', token, {httpOnly: true}).status(200).json(rest)
  } catch (error) {
    next(error)
    
  }
}
