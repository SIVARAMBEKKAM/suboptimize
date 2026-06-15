const mongoose=require("mongoose");
const mongodb = async () => {
  require('dotenv').config();

    try {
        await mongoose.connect("mongodb+srv://bekkamsivaramakrishna423_db_user:ToUu8BPngEeDGI28@cluster0.tetvjza.mongodb.net/?appName=Cluster0"
);
        console.log("MongoDB Connected");
    } catch (error) {
        console.log(error);
    }
};

  module.exports = mongodb;