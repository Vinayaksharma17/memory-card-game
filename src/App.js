import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import GameContainer from "./Components/GameContainer";

function App() {
  return (
    <div>
      <Grid container={true}>
        <Grid item xs={12}>
          <Box sx={{ padding: "16px" }}>
            <Typography variant="h4" align="center">
              Memory Card
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={1} md={2} lg={3} />
        <Grid item xs={10} md={8} lg={6}>
          <GameContainer />
        </Grid>
        <Grid item xs={1} md={2} lg={3} />
      </Grid>
    </div>
  );
}

export default App;