const express = require("express");
const router = express.Router();

const alterTableController = require("../controllers/table/alterTable.controller");
const newTableController = require("../controllers/table//newTable.contoller");
const deleteTableController = require("../controllers/table/deleteTable.controller");
const allTablesController = require("../controllers/table/allTables.controller");

router.post("/new", newTableController.createTable);

router.put("/alter/:tableName", alterTableController.alterTable);

router.delete("/delete", deleteTableController.deleteTable);

router.get("/all", allTablesController.getAllTables);

module.exports = router;
