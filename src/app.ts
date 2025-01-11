import app from "./utils/app";
import { connectDatabase } from "./utils/database";

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDatabase();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
};

startServer();

require("./app");
