const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
// Set minimal JWT defaults for local development
process.env.JWT_SECRET = process.env.JWT_SECRET || 'devsecret';
process.env.JWT_EXPIRE = process.env.JWT_EXPIRE || '30d';

connectDB();

const app = express();

// Body parser
app.use(express.json());

// Enable CORS
app.use(cors());

// Mount routers
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
