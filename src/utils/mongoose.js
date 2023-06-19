import mongoose from "mongoose";


export async function connectToMongoDB() {

    await mongoose
        .connect(process.env.MONGO_URI || 'mongo://localhost:27017', {
            user: process.env.MONGO_USER || '',
            pass: process.env.MONGO_PASS || '',
        })

}