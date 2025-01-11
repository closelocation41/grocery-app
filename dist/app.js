"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./utils/app"));
const database_1 = require("./utils/database");
const PORT = process.env.PORT || 3000;
const startServer = async () => {
    await (0, database_1.connectDatabase)();
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};
startServer();
require("./app");
