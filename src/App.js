import "./App.css";
import { Box, Grid, Typography } from "@mui/material";
import GameContainer from "./Components/GameContainer";
import logo from "./puzzle-icon.svg"
import { Height } from "@mui/icons-material";

function App() {
  return (
    <div>
      <Grid container={true} >
        <Grid item xs={12}>
          <Box sx={{ padding: "16px" }}>
            <Typography variant="h4" align="center">
              <img src={logo} alt="logo" style={{width:'30px', height:'30px'}}/>
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