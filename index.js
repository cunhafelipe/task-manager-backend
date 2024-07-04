const express = require("express");
const dotenv = require("dotenv");
const TaskRoute = require("./src/routes/task.routes");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.json());

connectToDatabase();

app.get("/", (req, res) => {
    res.send("Welcome to the API. Use /tasks for task management.");
});

app.use("/tasks", TaskRoute);

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
