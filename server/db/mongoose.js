const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri = "mongodb+srv://nagendra:CeVrL0lYPMJCX7CU@cluster0.8oaoyxf.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Perform any other initialization tasks here
  })
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
