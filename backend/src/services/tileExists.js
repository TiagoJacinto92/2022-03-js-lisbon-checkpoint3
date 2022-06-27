const models = require("../models");

const tileExists = (req, res, next) => {
  const coordX = parseInt(req.params.x, 10);
  const coordY = parseInt(req.params.y, 10);

  if (models.tile.findAllByCoordinates(coordX, coordY).length === 0)
    res.sendStatus(422);
  else next();
};

module.exports = tileExists;
