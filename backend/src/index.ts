import express from "express";
import cors from "cors";

import {  postKontakts } from "./controller/kontakts";

const app = express();
const port = 4000;


/**
 * App middlewares.
 *
 */
app.use(cors());
app.use(express.json());



/**
 * Routes.
 *
 */
app.post("/Kontakts", postKontakts);

// app.delete("/session", deleteSession);

// app.get("/sessions/check", checkValidSession);

/**
 * Start the app.
 *
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});