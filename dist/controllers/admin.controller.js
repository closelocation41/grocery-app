"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteGrocery = exports.updateGrocery = exports.getGroceries = exports.addGrocery = void 0;
const grocery_model_1 = __importDefault(require("../models/grocery.model"));
const addGrocery = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const grocery = new grocery_model_1.default({ name, price, stock });
        const savedGrocery = await grocery.save();
        res.status(201).json(savedGrocery);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.addGrocery = addGrocery;
const getGroceries = async (req, res) => {
    try {
        const groceries = await grocery_model_1.default.find();
        res.status(200).json(groceries);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getGroceries = getGroceries;
const updateGrocery = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedGrocery = await grocery_model_1.default.findByIdAndUpdate(id, updates, { new: true });
        if (!updatedGrocery) {
            res.status(404).json({ error: "Grocery not found" });
        }
        else {
            res.status(200).json(updatedGrocery);
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.updateGrocery = updateGrocery;
const deleteGrocery = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedGrocery = await grocery_model_1.default.findByIdAndDelete(id);
        if (!deletedGrocery) {
            res.status(404).json({ error: "Grocery not found" });
        }
        else {
            res.status(200).json({ message: "Grocery deleted successfully" });
        }
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.deleteGrocery = deleteGrocery;
