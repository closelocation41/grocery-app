"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get("/groceries", user_controller_1.getGroceries);
router.post("/orders", user_controller_1.placeOrder);
exports.default = router;
