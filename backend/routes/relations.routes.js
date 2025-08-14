const express = require("express");
const router = express.Router();

const alterRelationsController = require("../controllers/relations/alterRelations.contoller");
const newRelationController = require("../controllers/relations/addRelations.contoller");
const deleteRelationController = require("../controllers/relations/deleteRelations.contoller");

router.post("/new", newRelationController.addRelation);

router.put("/alter/:relationName", alterRelationsController.alterRelation);

router.delete("/delete/:relationName", deleteRelationController.deleteRelation);

module.exports = router;
