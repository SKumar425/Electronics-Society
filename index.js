const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const databaseConnection = require("./db");

const cors = require('cors');

const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const problemRoute = require("./routes/problems");
const contributionRoute = require("./routes/contributions");
const contactRoute = require("./routes/contacts");

// connection to databse
databaseConnection();

// middlewares
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors())
app.options('*', cors())

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/posts", postRoute);
app.use("/api/v1/problems", problemRoute);
app.use("/api/v1/contributions", contributionRoute);
app.use("/api/v1/contact", contactRoute);

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is running on port : ", process.env.PORT || 8000);
});
