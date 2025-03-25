import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import articleRoutes from './routes/articleRoutes.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: "https://horizonlegalmedia.com", // Replace with your Netlify URL
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/articles', articleRoutes);


// Database connection
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 

