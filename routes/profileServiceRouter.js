const express = require("express");
const router = express.Router();
const getUserProfile = require("../JSONData/MyDailyWorkboard/getUserProfile.json");
router.post("/getUserProfile.do", (req, res) => {
  res.send(getUserProfile);
});

module.exports = router;
