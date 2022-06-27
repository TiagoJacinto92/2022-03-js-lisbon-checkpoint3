const models = require("../models");

const checkTreasure = (req, res, next) => {
  const coordX = parseInt(req.params.x, 10);
  const coordY = parseInt(req.params.y, 10);
  models.tile.findAllByCoordinates(coordX, coordY).then(([rows]) => {
    if (rows?.has_treasure) {
      req.isJackRich = true;
    } else {
      req.isJackRich = false;
    }
  });
  next();
};

module.exports = checkTreasure;
