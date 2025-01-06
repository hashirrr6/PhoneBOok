import mongoose from "mongoose";

export default async function connect() {
    try {
        const db = await mongoose.connect(process.env.DB_URL + process.env.DB_NAME);
        console.log("Database connected");
        return db;
    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }
}
