const express = require("express");
const router = express.Router();
const getUserOverviewJson = require("../JSONData/MyDailyWorkboard/getUserOverviewJson.json");
router.post("/getUserOverviewJson.do", (req, res) => {
  res.send(getUserOverviewJson);
});

module.exports = router;
