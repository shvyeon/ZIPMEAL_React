const mealkitModel = require("../models/mealkitList.js");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ mealkits: mealkitModel.getTopMeals() });
});

module.exports = router;
