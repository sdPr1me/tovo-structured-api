const express = require("express");
const router = express.Router();
const fetchCommunications = require("../JSONData/CallPrep/fetchCommunications.json");
const fetchCustomer = require("../JSONData/CallPrep/fetchCustomer.json");
router.post("/fetchCustomer.do", (req, res) => {
  const customerId = req.query.customerId;
  const resData = fetchCustomer.find(customer => {
    if (customer.id == customerId) {
      return customer;
    }
  });
  res.send(resData);
});
router.post("/fetchCommunications.do", (req, res) => {
  const customerId = req.query.customerId;
  const resData = fetchCommunications.find(communication => {
    if (communication.id == customerId) {
      return communication;
    }
  });
  res.send(resData);
});
module.exports = router;
