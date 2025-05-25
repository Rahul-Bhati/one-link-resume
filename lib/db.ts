import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        console.log("Connecting to MongoDB");
        console.log("MONGODB_URI => ",process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Connected to MongoDB");
    } catch (error: any) {
        console.error("Error connecting to MongoDB:", error);
        throw new Error(error);
    }
}

export default connectToDB; 
