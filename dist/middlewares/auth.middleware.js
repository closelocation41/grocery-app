"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultUser = exports.createToken = exports.authMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = "grocery_app";
// Middleware to verify token
const authMiddleware = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        req.user = decoded; // Attaching decoded user to the request object
        next();
    }
    catch (error) {
        res.status(403).json({ error: "Forbidden" });
    }
};
exports.authMiddleware = authMiddleware;
// Function to create a JWT token
const createToken = (user) => {
    return jsonwebtoken_1.default.sign(user, SECRET_KEY, { expiresIn: "1h" });
};
exports.createToken = createToken;
// Example default user for testing
const getDefaultUser = () => {
    return {
        id: "1",
        username: "default_user",
    };
};
exports.getDefaultUser = getDefaultUser;
