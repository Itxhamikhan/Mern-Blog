import express from 'express';
import { test } from '../controllers/user.controller.js';

const router = express.Router();

                                // create a test Api route    
router.get("/test", test);

export default router; 