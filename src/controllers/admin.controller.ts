import { Request, Response } from "express";
import Grocery from "../models/grocery.model";

export const addGrocery = async (req: Request, res: Response) => {
    try {
        const { name, price, stock } = req.body;
        const grocery = new Grocery({ name, price, stock });
        const savedGrocery = await grocery.save();
        res.status(201).json(savedGrocery);
    } catch (error:any){
        res.status(500).json({ error: error.message });
    }
};

export const getGroceries = async (req: Request, res: Response) => {
    try {
        const groceries = await Grocery.find();
        res.status(200).json(groceries);
    } catch (error:any){
        res.status(500).json({ error: error.message });
    }
};

export const updateGrocery = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedGrocery = await Grocery.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedGrocery) {
            res.status(404).json({ error: "Grocery not found" });
        } else {
            res.status(200).json(updatedGrocery);
        }
    } catch (error:any){
        res.status(500).json({ error: error.message });
    }
};

export const deleteGrocery = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deletedGrocery = await Grocery.findByIdAndDelete(id);
        if (!deletedGrocery) {
            res.status(404).json({ error: "Grocery not found" });
        } else {
            res.status(200).json({ message: "Grocery deleted successfully" });
        }
    } catch (error:any){
        res.status(500).json({ error: error.message });
    }
};
