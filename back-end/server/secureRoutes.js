import express from "express";
import {checkAuth} from '../middleware/check-auth.js';
const router = express.Router();

router.get("/secure-data", checkAuth, (req,res)=> {
    res.status(200).json({ message: 'This is secure data!' });
});

export default router;