// Server Create
const express = require('express');
const authRoutes = require('./routes/auth.routes');
const cookieParser = require('cookie-parser');


const app = express();
app.use(express.json())
app.use(cookieParser())

// prefix /api/auth
app.use('/api/auth',authRoutes)


module.exports = app;