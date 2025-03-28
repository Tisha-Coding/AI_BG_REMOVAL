import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js'

const app = express()
app.use(express.json())
app.use(cors())

// Ensure database connection only happens once
let isConnected = false;
async function initialize() {
    if (!isConnected) {
        await connectDB()
        isConnected = true;
    }
}

// Handle API requests
app.get('/', async (req, res) => {
    await initialize();
    res.send("API WORKING");
});

// Instead of app.listen(), export the app (Vercel handles the execution)
export default app;