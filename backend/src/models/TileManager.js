const AbstractManager = require("./AbstractManager");

class TileManager extends AbstractManager {
  static table = "tile";

  findAll() {
    return this.connection.query(
      `select id, type, coord_x, coord_y, has_treasure from  ${TileManager.table}`
    );
  }

  findAllByCoordinates(coordX, coordY) {
    if (coordX > 11 || coordX < 0 || coordY > 5 || coordY < 0) {
      return [];
    }
    return this.connection.query(
      `select id, type, coord_x, coord_y, has_treasure from  ${TileManager.table} where coord_x = ? and coord_y = ?`,
      [coordX, coordY]
    );
  }

  getRandomIsland() {
    return this.connection.query(
      `select id, type, coord_x, coord_y from  ${TileManager.table} where type = 'island' order by rand() limit 1`
    );
  }

  hideTreasure() {
    return this.getRandomIsland().then(([rows]) => {
      return this.connection.query(
        `update ${TileManager.table} set has_treasure = 0; update ${TileManager.table} set has_treasure = 1 where type = 'island' AND id = ?`,
        [rows[0].id]
      );
    });
  }
}

module.exports = TileManager;
