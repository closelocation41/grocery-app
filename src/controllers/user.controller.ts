import { Request, Response } from "express";
import Grocery from "../models/grocery.model";
import Order from "../models/order.model";

export const getGroceries = async (req: Request, res: Response) => {
    try {
        const groceries = await Grocery.find({ stock: { $gt: 0 } });
        res.status(200).json(groceries);
    } catch (error:any){
        res.status(500).json({ error: error.message });
    }
};

export const placeOrder = async (req: Request, res: Response) => {
    try {
        const { userId, items } = req.body;
        const order = new Order({ userId, items });
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    } catch (error:any){
        res.status(500).json({ error: error.message });
    }
};
