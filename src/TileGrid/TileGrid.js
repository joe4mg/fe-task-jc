import React, { useEffect, useState } from "react";
import Tile from "../Tile/Tile";
import { findFactors } from "../utils/findFactors";

const TileGrid = ({ tileCount }) => {
  const [selectedTileIdx, setSelectedTileIdx] = useState();
  const [multiples, setMultiples] = useState([]);

  const handleClick = (index) => {
    if (index === selectedTileIdx) {
      setSelectedTileIdx(undefined);
    } else {
      setSelectedTileIdx(index);
    }
  };

  useEffect(() => {
    setMultiples(findFactors(selectedTileIdx, tileCount));
  }, [selectedTileIdx]);

  return (
    <div className={"tile-grid"}>
      {[...Array(tileCount)].map((_, idx) => (
        <Tile
          key={idx + 1}
          id={idx + 1}
          onClick={handleClick}
          selected={idx + 1 === selectedTileIdx}
          active={multiples.includes(idx + 1)}
        />
      ))}
    </div>
  );
};

export default TileGrid;
