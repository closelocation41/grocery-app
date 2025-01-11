import { Router } from "express";
import { getGroceries, placeOrder } from "../controllers/user.controller";

const router = Router();

router.get("/groceries", getGroceries);
router.post("/orders", placeOrder);

export default router;
