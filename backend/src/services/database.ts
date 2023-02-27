import { Client } from "pg";

export const pgClient = new Client({
    user: "postgres",
    database: "Kontaktbuch",
    password: "postgres",
    port: 5432,
    host: "localhost",
  });

pgClient.connect();