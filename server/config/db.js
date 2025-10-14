const mongoose = require('mongoose');
let mongodInstance = null;

// Use an in-memory MongoDB when no MONGO_URI is provided (makes local dev easier)
const connectDB = async () => {
  try {
    let mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      // Lazy require to keep install-time small unless used
      const { MongoMemoryServer } = require('mongodb-memory-server');
      mongodInstance = await MongoMemoryServer.create();
      mongoUri = mongodInstance.getUri();
      console.log('Started in-memory MongoDB for development');
    }

    await mongoose.connect(mongoUri, {
      // Note: useNewUrlParser/useUnifiedTopology flags are no longer required in modern drivers
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err.message || err);
    // Exit process with failure
    process.exit(1);
  }
};

// Allow graceful stop of in-memory server if needed
connectDB.stopInMemory = async () => {
  if (mongodInstance) {
    await mongoose.disconnect();
    try {
      await mongodInstance.stop();
    } catch (err) {
      console.warn('Error stopping in-memory MongoDB', err);
    }
  }
};

module.exports = connectDB;
