const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
require('dotenv/config');
const PORT = process.env.PORT || 5000;
const logger = require('morgan')


//routes
const userRoutes = require('./routes/userRoutes.js');
const docotrRoutes = require('./routes/doctorRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');

//middlewares
app.use(logger('dev'))
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // allow requests from this origin
    credentials: true, // allow credentials to be sent with the request
}))

//databaseConnection
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/doctorLink');

//
app.use('/', userRoutes)
app.use('/admin', adminRoutes)
app.use('/doctor',docotrRoutes)

//serverPort
app.listen(PORT, () => console.log(`server started on ${PORT}`));
