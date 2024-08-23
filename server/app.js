const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

// Middleware
app.use(bodyParser.json());

// Routes
const categoryRoutes = require('./routes/categories');
const productRoutes = require('./routes/products');


app.use('/api/category', categoryRoutes);
app.use('/api/products', productRoutes);

// Database Connection
mongoose.connect(process.env.MongoDb_Url)
    .then(() => {
        console.log('Database Connection is Ready...');
        // Server
        app.listen(process.env.PORT, () => {
            console.log(`Server is running http://localhost:${process.env.PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
