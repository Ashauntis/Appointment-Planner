import React from "react";
import { Tile } from '../tile/Tile.js'

export const TileList = (props) => {
  return (
    <div>
      {
        // logic to iteratively render tiles with each object in the contacts array passed via props

        props.data.map((obj, index) => {
          return <Tile data={obj} key={index}/>
        })
      }
    </div>
  );
};
