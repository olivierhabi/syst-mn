import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import CreateAdmin from "./controllers/AdminController";
import userRoutes from "./routes/UserRoutes";
import PeopleRoutes from "./routes/PeopleRoutes";

import models from "./models";

import cors from "cors";

dotenv.config();

CreateAdmin();

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

//Product Management (API)
app.use("/api/user", userRoutes);
app.use("/api/people", PeopleRoutes);

app.get("/", (req, res) => {
  return res.status(200).send({
    status: 200,
    message: "Welcome to Sys SYSTEM",
  });
});

models.sequelize
  .sync({
    force: false,
  })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening on port ${process.env.PORT}`)
    )
  );

export default app;
