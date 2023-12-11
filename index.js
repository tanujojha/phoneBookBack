import 'dotenv/config';
import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import contactRoutes from "./routes/contRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;
const mongoURI = getProdDevURL().MONGODB_ATLAS_URI;


// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static("public"));  

// Connect to DB 
const connectDB = async()=>{
    try {
        const res = await mongoose.connect(mongoURI);
        console.log(res.connection.readyState);
        console.log("MongoDB connected");
    } catch (error) {
        console.log(error);
    }
};
connectDB();

//  API Routes
app.use("/api/cont", contactRoutes);


// Test/Info route
app.get("/api", async(req, res)=>{
    const data = {
        status: "Success",
        message: "Welcome to API/Server of Project Management",
    }

    res.status(200).send(data)
});


server.listen(PORT, ()=> console.log(`Server started on port: ${PORT}`));