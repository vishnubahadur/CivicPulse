import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"

const app = express();
app.use(express.json())
// Load environment variables silently
dotenv.config({ override: false });


app.use("/api/auth",authRoutes);

const PORT = process.env._PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on: ${PORT}`)
})