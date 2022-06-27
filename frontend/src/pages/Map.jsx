import { useCaribbean } from "@contexts/CaribbeanContext";

import "./Map.css";

import boatImage from "@assets/boat.png";

function Map() {
  const { boat, tiles } = useCaribbean();
  const boatTile = tiles.find(
    (tile) => tile.coord_x === boat?.coord_x && tile.coord_y === boat?.coord_y
  );

  return (
    <div className="container-fluid">
      <h1>Map</h1>
      <div className="row">
        <div className="col-md-10">
          <div className="map">
            {tiles.length === 0 ? (
              <div className="alert alert-warning">
                You are still on the firm ground, you have to fill the database
                first !
              </div>
            ) : (
              <div className="row">
                {tiles.map((tile) => (
                  <div className={`tile col-1 ${tile.type}`} key={tile.id}>
                    <div className="tile-name">{tile.name}</div>
                    <div className="tile-name coords">
                      {tile.coord_x},{tile.coord_y}
                    </div>
                    {boat?.coord_x === tile.coord_x &&
                      boat?.coord_y === tile.coord_y && (
                        <img
                          className="boat img-fluid"
                          src={boatImage}
                          alt="boat"
                        />
                      )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="col-md-2">
          <div className="infos">
            <h2>Information</h2>
            {/* Add here informations about current ship position */}
            {boat?.coord_x},{boat?.coord_y} {boatTile?.type}{" "}
            {boatTile?.has_treasure === 1 ? " JACK HAS BREAD" : " JACK IS POOR"}
          </div>
          <div className="navigation">
            <h2>Navigation</h2>
            {/* Add here N/S/E/W links */}
            <a
              href={`boat/move/${parseInt(boat?.coord_x, 10)}/${
                parseInt(boat?.coord_y, 10) + 1
              }`}
            >
              North
            </a>
            <a
              href={`boat/move/${parseInt(boat?.coord_x, 10) + 1}/${parseInt(
                boat?.coord_y,
                10
              )}`}
            >
              East
            </a>
            <a
              href={`boat/move/${parseInt(boat?.coord_x, 10)}/${
                parseInt(boat?.coord_y, 10) - 1
              }`}
            >
              South
            </a>
            <a
              href={`boat/move/${parseInt(boat?.coord_x, 10) - 1}/${parseInt(
                boat?.coord_y,
                10
              )}`}
            >
              West
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
