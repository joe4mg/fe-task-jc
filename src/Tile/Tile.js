import React from "react";

const Tile = ({ id, onClick, selected, active }) => {
  const handleClick = (e) => {
    e.preventDefault();
    onClick(id);
  };
  return (
    <button
      onClick={handleClick}
      className={`tile ${active ? "tile--active" : ""} ${
        selected ? "tile--selected" : ""
      }`}
    >
      {id}
    </button>
  );
};

export default Tile;
