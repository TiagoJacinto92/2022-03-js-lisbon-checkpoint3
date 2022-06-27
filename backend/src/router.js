const express = require("express");
const tileExists = require("./services/tileExists");
const checkTreasure = require("./services/checkTreasure");

const { BoatController, TileController } = require("./controllers");

const router = express.Router();

router.get("/tiles", TileController.browse);

router.get("/boat", BoatController.get);
router.put("/boat/move/:x/:y", tileExists, checkTreasure, BoatController.move);
router.get("/boat/start", TileController.hide, BoatController.start);

module.exports = router;
