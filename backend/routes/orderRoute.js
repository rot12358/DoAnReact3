import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { placeOrder } from '../controllers/orderControlller.js'

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeOrder);

export default orderRouter;