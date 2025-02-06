const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://krishnamandalpada:jTVK5JMGPwkTTl4w@cluster2.dj1on.mongodb.net/chat_app?retryWrites=true&w=majority&appName=Cluster2", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error: ", err);
    process.exit(1);
  }
};

module.exports = connectDB;
