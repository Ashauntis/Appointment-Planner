import React from "react";
import PropTypes from "prop-types";

export const Tile = (props) => {
  console.log(`Tile recieved`)
  return (
    <div className="tile-container">
        {props.data && <p className="tile-title">{props.data.name}</p>}
        {props.data && <p className="tile-title">{props.data.title}</p>}
        {props.data && <p className="tile">{props.data.contact}</p>}
        {props.data && <p className="tile">{props.data.date}</p>}
        {props.data && <p className="tile">{props.data.time}</p>}
        {props.data && <p className="tile">{props.data.phone}</p>}
        {props.data && <p className="tile">{props.data.email}</p>}
    </div>
  );
};

Tile.propTypes = {
  data: PropTypes.object.isRequired,
}
