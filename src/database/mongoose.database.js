const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@taskmanagercluster.x3nyebs.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerCluster`
        );
        console.log("Connected to database");
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectToDatabase;
