import express from "express";
import dotenv from "dotenv";
import connect from "./connection.js";
import router from "./router.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.static("../clientSide"));
app.use(express.json());

// Routes
app.use("/api", router);

// Start server
connect().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running at http://localhost:${process.env.PORT}`);
    });
}).catch(error => {
    console.error("Error connecting to the database:", error);
});
