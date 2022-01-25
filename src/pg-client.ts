import pg from "pg";
const config = {
  host: "task-board.postgres.database.azure.com",
  user: process.env.PG_USERNAME,
  password: process.env.PG_PASSWORD,
  database: "postgres",
  port: 5432,
  ssl: true,
};

export const pgClient = new pg.Client(config);
