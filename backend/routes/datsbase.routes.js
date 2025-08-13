const express = require("express");
const router = express.Router();

const dbenquiry=require("../controllers/databases/userdatabases.controller");
const dbnew=require("../controllers/databases/newdatabase.controller");

router.get("/getdb", dbenquiry.checkdb);
router.post("/createdb", dbnew.newdb);

module.exports = router;
