"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectDatabase = async () => {
    try {
        await mongoose_1.default.connect("mongodb://localhost:27017/grocery");
        console.log("Database connected successfully");
    }
    catch (error) {
        console.error("Database connection failed", error);
        process.exit(1);
    }
};
exports.connectDatabase = connectDatabase;
