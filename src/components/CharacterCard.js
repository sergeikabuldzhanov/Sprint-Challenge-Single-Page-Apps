import React from "react";

export default function CharacterCard(props) {
  return (
    <div className = "character-card">
      <h3>{props.character.name}</h3>
    </div>
  );
}
