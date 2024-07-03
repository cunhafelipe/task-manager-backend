const express = require("express");
const dotenv = require("dotenv");
const TaskRoute = require("./src/routes/task.routes");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
app.use(express.json());

connectToDatabase();

app.use("/tasks", TaskRoute);

app.listen(8000, () => console.log("Listening on port 8000!"));
