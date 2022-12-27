const mealkitModel = require("../models/mealkitList.js");

const express = require("express");
const router = express.Router();

router.get("/onTheMenu", function (req, res) {
  res.send({ mealkits: mealkitModel.getAllMealKits() });
});

module.exports = router;
