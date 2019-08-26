const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const profileServiceRouter = require("./routes/profileServiceRouter");
const overviewRouter = require("./routes/overviewRouter");
const workbookRouter = require("./routes/callWorkbookRouter");
const callPrepRouter = require("./routes/callPrepRouter");
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/cms/tovo/v1", [
  profileServiceRouter,
  overviewRouter,
  workbookRouter,
  callPrepRouter
]);
app.listen(4001, () => {
  console.log("listening on port 4001");
});
