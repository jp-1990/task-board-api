import express from "express";
import helmet from "helmet";
import cors from "cors";
import "dotenv/config";

import {
  createOneListQuery,
  deleteOneListQuery,
  getAllListsQuery,
  completeOneTaskQuery,
  createOneTaskQuery,
  deleteOneTaskQuery,
  overdueOneTaskQuery,
} from "./src/queries";

import { pgClient } from "./src/pg-client";

const port = 3000;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

pgClient.connect((err) => {
  if (err) throw new Error(`failed to connect to database: ${err}`);
  else {
    console.log("database connection successful");
  }
});

// ENDPOINTS
// get-all-lists - should return all lists with all tasks in each list
app.get("/v1/get-all-lists/", async (req, res, next) => {
  try {
    const queryRes = await pgClient.query(getAllListsQuery());
    res.send(JSON.stringify(queryRes.rows));
  } catch (err) {
    next(err);
  }
});

// create-one-list - should create new list with name and id
app.post("/v1/create-one-list/", async (req, res, next) => {
  try {
    const queryRes = await pgClient.query(createOneListQuery(req.body));
    res.send(JSON.stringify(queryRes.rows));
  } catch (err) {
    next(err);
  }
});

// delete-one-list - should delete list by id and return id and delete all tasks with this list id as a foreign key
app.post("/v1/delete-one-list/", async (req, res, next) => {
  try {
    await pgClient.query(deleteOneListQuery(req.body));
    res.send(JSON.stringify(req.body));
  } catch (err) {
    next(err);
  }
});
// update-one-list - should update list by id with tasks

// create-one-task - should create and return task with id, name, description, dealine and completed properties with list id as foreign key
app.post("/v1/create-one-task/", async (req, res, next) => {
  try {
    const queryRes = await pgClient.query(createOneTaskQuery(req.body));
    res.send(JSON.stringify(queryRes.rows));
  } catch (err) {
    next(err);
  }
});

// update-one-task - should update task by id and allow update of all properties other than id and return updated task

// delete-one-task - should delete task by id and return id
app.post("/v1/delete-one-task/", async (req, res, next) => {
  try {
    await pgClient.query(deleteOneTaskQuery(req.body));
    res.send(JSON.stringify(req.body));
  } catch (err) {
    next(err);
  }
});

// complete-task - should update task completed to true and 'send email' to 'user'
app.patch("/v1/complete-one-task/", async (req, res, next) => {
  try {
    await pgClient.query(completeOneTaskQuery(req.body));
    res.send(JSON.stringify(req.body));
  } catch (err) {
    next(err);
  }
});

// overdue-task - should update task overdue to true and 'send email' to 'user'
app.patch("/v1/overdue-one-task/", async (req, res, next) => {
  try {
    await pgClient.query(overdueOneTaskQuery(req.body));
    res.send(JSON.stringify(req.body));
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
