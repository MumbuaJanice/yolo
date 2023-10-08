const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();

const productRoute = require('./routes/api/productRoute');

// Define the MongoDB URL to use the service name from Docker Compose
const MONGODB_URI = 'mongodb://yolo-mongodb-1:27017/your-database-name'; // Replace 'your-database-name' with your actual database name

// Connecting to the Database
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });

// Initializing express
const app = express();

// Body parser middleware
app.use(express.json());

app.use(upload.array());

// Cors
app.use(cors());

// Use Route
app.use('/api/products', productRoute);

// Define the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
