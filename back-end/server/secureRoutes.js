import express from "express";
import { checkAuth } from '../middleware/check-auth.js';
const router = express.Router();

router.get("/secure-data", checkAuth, (req, res) => {
    const currentTime = Math.floor(Date.now() / 1000);
    const expiresIn = req.tokenExp - currentTime; // Calculate the remaining time in seconds
    res.status(200).json({
        message: 'This is secure data!',
        expiresIn
    });
});

export default router;
