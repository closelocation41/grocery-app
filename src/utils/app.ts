import express from "express";
import adminRoutes from "../routes/admin.routes";
import userRoutes from "../routes/user.routes";
import { Request, Response } from "express";
import { authMiddleware, getDefaultUser,createToken } from "../middlewares/auth.middleware";

const app = express();
app.use(express.json());

// Routes
app.use("/api/admin", authMiddleware, adminRoutes);
app.use("/api", userRoutes);
app.get('/create-token', (req: Request, res: Response) => {
    const defaultUser = getDefaultUser();
    const token = createToken(defaultUser);

    res.json({
        message: "Token created successfully",
        token,
    });
});

export default app;