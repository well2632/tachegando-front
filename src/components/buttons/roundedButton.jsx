import React from "react";

function RoundedButton({ content, onClick, palette }) {
  const palettes = ["orange", "blue", "red", "green"];

  const buttonPalette = palettes.includes(palette) ? palette : palettes[0];
  return (
    <button className={`button-rounded ${buttonPalette}`} onClick={onClick}>
      {content}
    </button>
  );
}

export default RoundedButton;
