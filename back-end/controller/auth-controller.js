import Data from "../model/auth.js";
import express from "express";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

export const registerUser = async(req, res) => {
    try{
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Data({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: "User registered successfully" })
    } catch(error){
        res.status(500).json({ error: 'Registration failed' })
    }
}

export const loginUser = async(req, res) => {
    try{
        const { email, password } = req.body;
        const user = await Data.findOne({ email });
        if(!user){
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if(!passwordMatch){
            return res.status(401).json({ error: 'Authentication failed' })
        }
        const token = jwt.sign({ userId: user._id, email: user.email }, 'secret_key', {expiresIn: '1h'});
        res.status(200).json({ token, userId: user._id });
    }catch(error){
        res.status(500).json({ error: 'Authentication failed' })
    }
}
