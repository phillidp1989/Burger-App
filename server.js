const express = require("express");
const { connection } = require("./config/connection");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());