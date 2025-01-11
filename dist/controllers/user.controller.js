"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeOrder = exports.getGroceries = void 0;
const grocery_model_1 = __importDefault(require("../models/grocery.model"));
const order_model_1 = __importDefault(require("../models/order.model"));
const getGroceries = async (req, res) => {
    try {
        const groceries = await grocery_model_1.default.find({ stock: { $gt: 0 } });
        res.status(200).json(groceries);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.getGroceries = getGroceries;
const placeOrder = async (req, res) => {
    try {
        const { userId, items } = req.body;
        const order = new order_model_1.default({ userId, items });
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.placeOrder = placeOrder;
