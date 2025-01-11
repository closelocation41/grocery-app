import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const SECRET_KEY = "grocery_app"; 

// Middleware to verify token
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        (req as any).user = decoded; // Attaching decoded user to the request object
        next();
    } catch (error) {
        res.status(403).json({ error: "Forbidden" });
    }
};

// Function to create a JWT token
export const createToken = (user: { id: string; username: string }) => {
    return jwt.sign(user, SECRET_KEY, { expiresIn: "1h" });
};

// Example default user for testing
export const getDefaultUser = () => {
    return {
        id: "1",
        username: "default_user",
    };
};


