const express = require("express");
const router = express.Router();
const getUserCallWorkBook = require("../JSONData/CallWorkboard/getUserCallWorkBook.json");
const getUpcomingSummary = require("../JSONData/CallWorkboard/getUpcomingSummary.json");
router.post("/getUserCallWorkBook.do", (req, res) => {
  let tempArr = [...getUserCallWorkBook.workbookItems];
  let slicedArr = [];
  while (tempArr.length > 0) {
    var temp = tempArr.splice(0, req.query.pageSize);
    slicedArr.push(temp);
  }
  let resData = {};
  resData.overview = { ...getUserCallWorkBook.overview };
  if (req.query.pageNumber < slicedArr.length) {
    resData.workbookItems = [...slicedArr[req.query.pageNumber]];
  } else {
    resData.workbookItems = [];
  }
  res.send(resData);
});
router.post("/getUpcomingSummary.do", (req, res) => {
  // let tempArr = [...getUserCallWorkBook.workbookItems];
  // let slicedArr = [];
  // while (tempArr.length > 0) {
  //   var temp = tempArr.splice(0, req.body.pageSize);
  //   slicedArr.push(temp);
  // }
  // let resData = {};
  // resData.overview = { ...getUserCallWorkBook.overview };
  // if (req.body.pageNumber - 1 < slicedArr.length) {
  //   resData.workbookItems = [...slicedArr[req.body.pageNumber - 1]];
  // } else {
  //   resData.workbookItems = [];
  // }
  res.send(getUpcomingSummary);
});

module.exports = router;
