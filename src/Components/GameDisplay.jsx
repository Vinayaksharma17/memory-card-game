import React from "react";
import { Grid, Container, Box, Button } from "@mui/material";
import GameCard from "./GameCard";
const GameDisplay = ({ cards, onClick, score, moves, onReset}) => {
  const handleClick = () => {};
  return (
    <Grid container spacing={1}>
      {cards.map((card) => {
        return (
          <Grid item xs={3} key={card.id}>
            <GameCard card={card} onClick={onClick} />
          </Grid>
        );
      })}
      <Grid item></Grid>
        <Grid item xs={12}>
          <Container
          sx={{
            padding: 1,
            border: 1,
            borderRadius: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around'
          }}
          
          >
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              Moves: {moves}
            </Box>
            <Button onClick={onReset}>Start Over</Button>
            <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              Score: {score}
            </Box>
          </Container>
        </Grid>
    </Grid>
  );
};

export default GameDisplay;