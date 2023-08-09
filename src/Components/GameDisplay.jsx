import React from "react";
import { Grid } from "@mui/material";
import GameCard from "./GameCard";
const GameDisplay = ({ cards, index, onClick }) => {
  const handleClick = () => {};
  return (
    <Grid container spacing={1}>
      {cards.map((card) => {
        return (
          <Grid item xs={3}>
            <GameCard card={card} index={index} onClick={onClick} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default GameDisplay;