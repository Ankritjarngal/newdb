const express = require("express");
const router = express.Router();

const dbenquiry=require("../controllers/databases/userdatabases.controller");

router.get("/getdb", dbenquiry.checkdb);

module.exports = router;
