const models = require("../models");

class TileController {
  static browse = (req, res) => {
    models.tile
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static hide = (req, res, next) => {
    models.tile.hideTreasure();
    next();
  };
}

module.exports = TileController;
