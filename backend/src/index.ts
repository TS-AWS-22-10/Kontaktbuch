const express = require('express') // import express from "express";
const cors = require('cors');

import {  deleteKontakts, postKontakts } from "./controller/kontakts";

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
app.post("/kontakts", postKontakts);
app.delete("/kontakts", deleteKontakts);



// app.get("/sessions/check", checkValidSession);

/**
 * Start the app.
 *
 */
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});