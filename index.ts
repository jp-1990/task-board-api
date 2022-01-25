import express from "express";
import helmet from "helmet";
import cors from "cors";
import "dotenv/config";

import { pgClient } from "./src/pg-client";

const port = 3000;
const app = express();

app.use(helmet());
app.use(cors());

pgClient.connect((err) => {
  if (err) throw new Error(`failed to connect to database: ${err}`);
  else {
    console.log("database connection successful");
  }
});

app.get("/", (req, res) => {
  res.send("Hello Worlddddd!");
});

// ENDPOINTS
// get-all-lists - should return all lists with all tasks in each list
// create-one-list - should create new list with name and id
// delete-one-list - should delete list by id and return id and delete all tasks with this list id as a foreign key
// update-one-list - should update list by id with tasks

// create-one-task - should create and return task with id, name, description, dealine and completed properties with list id as foreign key
// update-one-task - should update task by id and allow update of all properties other than id and return updated task
// delete-one-task - should delete task by id and return id
// update-many-tasks - should update tasks by ids and only allow updating of list id (i.e. moving tasks between lists)
// delete-many-tasks - should delete tasks by ids and return ids

// complete-task - should update task completed to true and 'send email' to 'user'

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
